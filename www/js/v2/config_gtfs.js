/* Author: Panu Ranta, panu.ranta@iki.fi, https://14142.net/kartalla/about.html */

'use strict';

function ConfigGtfs() {
    var configList = [
        {'name': 'HSL', 'file': 'hsl', 'dir': '',
         'lat': 60.302709, 'lng': 24.940832, 'zl': 10, 'alerts': true, 'vp': true,
         'vehicle_types': ['bus', 'train', 'tram', 'metro', 'ferry'],
         'visible_types': ['bus', 'train', 'tram', 'metro', 'ferry']},
        {'name': 'Suomi', 'file': 'suomi', 'dir': '',
         'lat': 65.229573, 'lng': 26.918078, 'zl': 5, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus', 'train', 'tram', 'metro', 'ferry', 'airplane'],
         'visible_types': ['train']},
        {'name': 'VR', 'file': 'vr', 'dir': 'split',
         'lat': 65.229573, 'lng': 26.918078, 'zl': 5, 'alerts': false, 'vp': false,
         'vehicle_types': ['train'],
         'visible_types': ['train']},
        {'name': 'Hämeenlinna', 'file': 'hameenlinna', 'dir': 'split',
         'lat': 60.993705, 'lng': 24.458368, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Joensuu', 'file': 'joensuu', 'dir': 'split',
         'lat': 62.607072, 'lng': 29.791886, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Jyväskylä', 'file': 'jyvaskyla', 'dir': 'split',
         'lat': 62.235599, 'lng': 25.761523, 'zl': 11, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Kotka', 'file': 'kotka', 'dir': 'split',
         'lat': 60.487563, 'lng': 26.906511, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Kouvola', 'file': 'kouvola', 'dir': 'split',
         'lat': 60.866238, 'lng': 26.705006, 'zl': 11, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Kuopio', 'file': 'kuopio', 'dir': 'split',
         'lat': 62.900360, 'lng': 27.662373, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Lahti', 'file': 'lahti', 'dir': 'split',
         'lat': 60.983510, 'lng': 25.650401, 'zl': 11, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Lappeenranta', 'file': 'lappeenranta', 'dir': 'split',
         'lat': 61.058213, 'lng': 28.188472, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Mikkeli', 'file': 'mikkeli', 'dir': 'split',
         'lat': 61.683347, 'lng':  27.283888, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Oulu', 'file': 'oulu', 'dir': 'split',
         'lat': 65.021237, 'lng': 25.468197, 'zl': 11, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Tampere', 'file': 'tampere', 'dir': 'split',
         'lat': 61.475903, 'lng': 23.774071, 'zl': 11, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Turku', 'file': 'turku', 'dir': 'split',
         'lat': 60.444043, 'lng': 22.276154, 'zl': 11, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Vaasa', 'file': 'vaasa', 'dir': 'split',
         'lat': 63.097463, 'lng': 21.621426, 'zl': 13, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus'],
         'visible_types': ['bus']},
        {'name': 'Budapest', 'file': 'bkk', 'dir': 'bkk',
         'lat': 47.496713, 'lng': 19.050625, 'zl': 12, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus', 'tram', 'train', 'metro', 'ferry'],
         'visible_types': ['tram']},
        {'name': 'Estonia', 'file': 'est', 'dir': 'est',
         'lat': 58.857520, 'lng': 25.475996, 'zl': 8, 'alerts': false, 'vp': false,
         'vehicle_types': ['bus', 'tram', 'train', 'ferry'],
         'visible_types': ['train']}
    ];
    var configHash = null;

    this.getList = function () {
        return configList;
    };

    this.getConfig = function (dataType) {
        if (configHash === null) {
            initConfigHash();
        }
        return configHash[dataType];
    };

    function initConfigHash() {
        configHash = {};
        for (var i = 0; i < configList.length; i++) {
            configHash[configList[i]['file']] = configList[i];
        }
    }
}
