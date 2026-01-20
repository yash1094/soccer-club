export function getClubFromRequest(request: Request) {
    const url = new URL(request.url);

    // ✅ DEV OVERRIDE
    const devClub = url.searchParams.get("club");
    if (devClub === "galacticosc" || devClub === "acesfc") {
        return devClub;
    }

    // 🌐 DOMAIN-BASED RESOLUTION
    const host = request.headers.get("host") ?? "";

    if (host.includes("galacticosc")) return "galacticosc";
    if (host.includes("acesfc")) return "acesfc";

    // 🧪 Local fallback
    return "galacticosc";
}
