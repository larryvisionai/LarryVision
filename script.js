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