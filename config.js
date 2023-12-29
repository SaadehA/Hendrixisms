module.exports = {
    app: {
        token: 'MTE4OTcyNDg5OTQ3Mjg1MTA1NA.GreR7J.uJVKM1CsfdRWYHFjuwiaP56PHsO6CtgOZ9v7CM',
        playing: 'by Amr',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
