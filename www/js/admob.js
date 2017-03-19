    function onLoad() {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            document.addEventListener('deviceready', checkFirstUse, false);
        } else {
            checkFirstUse();
        }
    }

    var admobid = {};
    if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
            banner: 'ca-app-pub-1683858134373419/4648497083',
            interstitial: 'ca-app-pub-1683858134373419/3279071486'
        };
    }

    function initApp() {
        if (!AdMob) { alert('admob plugin not ready'); return; }
        initAd();
        loadInterstitial();
    }

    function initAd() {
        var defaultOptions = {
            // bannerId: admobid.banner,
            // interstitialId: admobid.interstitial,
            // adSize: 'SMART_BANNER',
            // width: integer, // valid when set adSize 'CUSTOM'
            // height: integer, // valid when set adSize 'CUSTOM'
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
            bgColor: 'black', // color name, or '#RRGGBB'
            // x: integer,      // valid when set position to 0 / POS_XY
            // y: integer,      // valid when set position to 0 / POS_XY
            isTesting: false, // set to true, to receiving test ad for testing purpose
            overlap: false
            // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        };
        AdMob.setOptions(defaultOptions);
        registerAdEvents();
       // AndroidFullScreen.immersiveMode(successFunction, errorFunction);
    }
    // optional, in case respond to events or handle error
    function registerAdEvents() {

        // new events, with variable to differentiate: adNetwork, adType, adEvent
        document.addEventListener('onAdFailLoad', function (data) 
        {
            document.body.removeAttribute('style'); 
            document.getElementById('splashscreen').style.display = 'none';  
        });
        document.addEventListener('onAdLoaded', function (data) { });
        document.addEventListener('onAdPresent', function (data) { });
        document.addEventListener('onAdLeaveApp', function (data) { });
        document.addEventListener('onAdDismiss', function (data) 
        { 
            document.body.removeAttribute('style'); 
            document.getElementById('splashscreen').style.display = 'none';       
        });
    }

    // click button to call following functions
    //function getSelectedAdSize() {
    //    var i = document.getElementById("adSize").selectedIndex;
    //    var items = document.getElementById("adSize").options;
    //    return items[i].value;
    //}
    //function getSelectedPosition() {
    //    var i = document.getElementById("adPosition").selectedIndex;
    //    var items = document.getElementById("adPosition").options;
    //    return parseInt(items[i].value);
    //}
    function createSelectedBanner() {
        //var overlap = document.getElementById('overlap').checked;
        //var offsetTopBar = document.getElementById('offsetTopBar').checked;
        //AdMob.createBanner( {adId:admobid.banner, overlap:overlap, offsetTopBar:offsetTopBar, adSize: getSelectedAdSize(), position:getSelectedPosition()} );
        AdMob.createBanner({adId:admobid.banner});
    }
    //function createBannerOfGivenSize() {
    //    var w = document.getElementById('w').value;
    //    var h = document.getElementById('h').value;

    //    AdMob.createBanner({ adId: admobid.banner,
    //        adSize: 'CUSTOM', width: w, height: h,
    //        position: getSelectedPosition()
    //    });
    //}
    //function showBannerAtSelectedPosition() {
    //    AdMob.showBanner(getSelectedPosition());
    //}
    //function showBannerAtGivenXY() {
    //    var x = document.getElementById('x').value;
    //    var y = document.getElementById('y').value;
    //    AdMob.showBannerAtXY(x, y);
    //}
    //function prepareInterstitial() {
    //    var autoshow = document.getElementById('autoshow').checked;
    //    AdMob.prepareInterstitial({ adId: admobid.interstitial, autoShow: autoshow });
    //}

function successFunction()
{
}
 
function errorFunction(error)
{
}

    function loadInterstitial() {
        AdMob.prepareInterstitial({ adId: admobid.interstitial, isTesting: false, autoShow: true });
    }


   function checkFirstUse()
    {
            askRating();
            initApp();
    }

function askRating()
{
  AppRate.preferences = {
  openStoreInApp: true,
  useLanguage:  'fi',
  usesUntilPrompt: 10,
  promptAgainForEachNewVersion: false,
  storeAppURL: {
                android: 'market://details?id=com.helsinki.withads'
               }
};
 
AppRate.promptForRating(false);
}
