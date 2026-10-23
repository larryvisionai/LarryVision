// LarryVision AI — Supabase Connection

const SUPABASE_URL = "https://ydswbvrzryzkufhcoglc.supabase.co";

// Replace this placeholder with your actual Supabase PUBLISHABLE key.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_sPzowpdcmWMK4Lo7CUZFNQ_Mitp67g9";

let supabaseClient = null;

function initializeLarryVision() {
    if (!window.supabase) {
        console.error("Supabase library did not load.");
        return false;
    }
async function openProtectedFeature(featureName) {
if (!supabaseClient) {
alert("LarryVision AI is still connecting. Please refresh and try again.");
return;
}

try {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) {
        alert("Unable to verify your sign-in. Please try again.");
        return;
    }

    if (!data.session) {
        window.location.href =
            "login.html?returnTo=" +
            encodeURIComponent(
                window.location.origin +
                window.location.pathname
            );
        return;
    }

    alert(
        featureName +
        " is available in your workspace. Actual AI video generation is not connected yet."
    );
} catch (error) {
    alert("Something went wrong. Please refresh and try again.");
}

}

    if (!SUPABASE_PUBLISHABLE_KEY ||
        SUPABASE_PUBLISHABLE_KEY === "PASTE_YOUR_PUBLISHABLE_KEY_HERE") {
        console.error("Add your Supabase publishable key.");
        return false;
    }

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    return true;
}

initializeLarryVision();