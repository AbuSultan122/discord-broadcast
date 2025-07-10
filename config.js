module.exports = {
    bot: {
        tokens: [
     "MTM5MDYyMjY3Mjg3ODE3NDI5OQ.GaqTJw.5AMATAIaZWwuPsievq9b3hyqZy9kciTbiXKutc",              // Main bot token - Replace with your actual token
        
        
        
        
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'Shm3 store', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1372318763751444621',         // ايدي السيرفر
        broadcastRoleId: '1372319213527765163', // ايدي الرول اللي يستخدم عليها البوت

        reportChannelId: '1372318944148324365' // ايدي الروم اللي يرسل فيه البوت التقاري
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }
};
