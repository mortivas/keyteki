const menus = [
    { path: '/login', title: 'Login', showOnlyWhenLoggedOut: true, position: 'right' },
    { path: '/register', title: 'Register', showOnlyWhenLoggedOut: true, position: 'right' },
    { path: '/decks', title: 'Decks', showOnlyWhenLoggedIn: true, position: 'left' },
    //{ path: '/matches', title: 'Matches', showOnlyWhenLoggedIn: true, position: 'left' },
    { path: '/play', title: 'Play', position: 'left' },
    {
        path: '/tournamentlobby',
        title: 'Tournament',
        showOnlyWhenLoggedIn: true,
        permission: 'canManageTournaments',
        position: 'left'
    },
    {
        title: 'Help',
        position: 'left',
        childItems: [
            { path: '/how-to-play', title: 'How To Play' },
            { path: '/about', title: 'About' },
            { path: '/privacy', title: 'Privacy Policy' }
        ]
    },
    {
        title: 'Placeholder',
        childItems: [
            { title: 'Profile', path: '/profile' },
            { title: 'Security', path: '/security' },
            { title: 'Block List', path: '/blocklist' },
            { title: 'Logout', path: '/logout' }
        ],
        showOnlyWhenLoggedIn: true,
        position: 'right',
        showProfilePicture: true
    },
    {
        title: 'Admin',
        showOnlyWhenLoggedIn: true,
        childItems: [
            { path: '/news', title: 'News', permission: 'canEditNews' },
            { path: '/users', title: 'Users', permission: 'canManageUsers' },
            { path: '/nodes', title: 'Nodes', permission: 'canManageNodes' },
            { path: '/banlist', title: 'Ban List', permission: 'canManageBanlist' },
            { path: '/admin/motd', title: 'Motd', permission: 'canManageMotd' }
        ],
        position: 'left'
    }
];

export default menus;
