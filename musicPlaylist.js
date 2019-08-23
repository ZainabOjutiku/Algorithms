// Your music player contains N different songs and she wants to listen to L (not necessarily different) songs during your trip.  You create a playlist so that:Every song is played at least once.A song can only be played again only if K other songs have been played.Return the number of possible playlists.  As the answer can be very large, return it modulo 10^9 + 7.
//Example 1:
//Input: N = 3, L = 3, K = 1
//Output: 6
//Explanation: There are 6 possible playlists. [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1].

var numMusicPlaylists = function (N, L, K) {
    //N = no of songs
    //L = length of playlsit
    var f = new Array(L + 1).fill(0)
    f = f.map(a => new Array(N + 1).fill(0))
    f[0][0] = 1
    var modulo = 10 ** 9 + 7
    for (let i = 1; i <= L; i++) {
        for (let j = 1; j <= N; j++) {
            // Add new song to playlist
            f[i][j] = f[i][j] + (f[i - 1][j - 1] * (N - j + 1))
            // Add existing song to playlist
            f[i][j] = f[i][j] + (f[i - 1][j] * Math.max(j - K, 0))
            f[i][j] = f[i][j] % modulo
        }
    }
    return f[L][N]
};
numMusicPlaylists(3, 4, 2)