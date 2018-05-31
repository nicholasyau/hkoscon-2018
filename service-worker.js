/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["0.4558c67c67ddb93946cf.js","230991c12673b64c8e9aae7045de31ff"],["0.4558c67c67ddb93946cf.js.map","c9d5ab67b7fac58005e8a18604ba3382"],["1.cee9ed7c6364cb579752.js","6f0324d525b84e663b3fa46329ffcac6"],["1.cee9ed7c6364cb579752.js.map","c7453a3786caf2d0099dbdad60a01751"],["5.1a97782569b2181ed176.js","1aa647a12cacc837f60dbee54a2f2d58"],["5.1a97782569b2181ed176.js.map","9c4de9ac6a5092571189129339197967"],["6.4335c957cb5046e36b6a.js","3f36c3a49e7245908438bdac16d3a362"],["6.4335c957cb5046e36b6a.js.map","162fed9f38bdae5cd655ee4928b88e19"],["7.8760050fbe37c5adc7b8.js","24961d8235cda6618d22340378ae8148"],["7.8760050fbe37c5adc7b8.js.map","0281fe407318a180a58974d0b1777ccd"],["8.38b136697f414c929201.js","279e45314028e0afa417ddfec541932e"],["8.38b136697f414c929201.js.map","3b1fae48509e0fccf44880a881118649"],["9.f22251c9c7b9acc75ff7.js","e13506a27a0f6baa51656c6be7fd64d9"],["9.f22251c9c7b9acc75ff7.js.map","79880d47514ffc630326cca4ed34181f"],["about-coc.html","849d9f2d296f47c7bb7f7b3155daf80e"],["about-committee.html","aafbd2333aa5e2c98d1cbe24cb4d3ae9"],["app.1c7ab5c9b061d7c5c690ab0bf5ca7b52.css","852f02b458776a2efa8758e8d50ad9c9"],["app.326fae29853a90d1ae1a.js","fe9ce48bcf36c9678469cb3110a3e874"],["app.326fae29853a90d1ae1a.js.map","901acbf937b7d0cd9131920b9aa9ed24"],["assets.json","8e38f79f1b8fc9e6f33e541b0a05aca0"],["cfc.html","c00fe8587fe3646a83c81cdb1b3cd1bd"],["cfp.html","925ffc8624af12852eb35379363058da"],["data/cfp.yml","b65395f8bc8ec35b6c50481d9b14eb54"],["data/community.yml","97a422185106c43f1c36fac6f5a715e9"],["data/general.json","fe01423bf24b14e948c487ce8943e5e8"],["data/site.yml","57a5d07879d37c810fd7fc7bc507da52"],["data/timetable-schema.yml","bb7808550ef501ed7f4f09d113e9d0d5"],["data/timetable.json","e3e1072713bc451f0fa8d2e9912020da"],["images/banner.jpg","9768d02a027b70840243d53a3f708a50"],["images/cover.jpg","3f1ffa6f7cf5ec7dbd79bd6164f28467"],["images/favicon.png","4634634056d4299d4f1a856d4e52e500"],["images/theme-day1.jpg","e1645b5f0388e69308bb8fa1d4875156"],["images/theme-day2.jpg","4ce1064fcd8843b6363844ec866e417b"],["index.html","4768fefbaf0d9bb9f89479a81121b481"],["manifest.6b0cf5b838a77e15b43a.js","7122965fb312b5447f803772f0abfccc"],["manifest.6b0cf5b838a77e15b43a.js.map","c5510ac750c53bc46d6a3effe16e1f70"],["manifest.json","bab2f310e98acf8fe10106f573b72bc7"],["sponsors/index.html","8f9e704e9c150633123e2b27fb993151"],["timetable.643982b8762cbaed67b7.js","33e4d29da1e7fa44ea70353ab1c0faa9"],["timetable.643982b8762cbaed67b7.js.map","b9fa6a66cc20450fad6d86ead6eb7ae6"],["timetable/index.html","abc4c7d91b4027245ae249a5cc3ea9c2"],["vendor.29352c4c037068da469f.js","cb6638d837337e458ecf24baace15ca0"],["vendor.29352c4c037068da469f.js.map","206b4b98a42e1cf18ca83215271eac35"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







