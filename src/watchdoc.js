/* License: see https://github.com/imrehg/WatchDoc/blob/master/README.md
 *
 * Original YouTube Feed Chrome extension license:
 *
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Slave Jovanovski (slave@google.com)
 *
 *
*/
      var gdocs = null;

      function initialize() {
        var oauth = ChromeExOAuth.initBackgroundPage({
          'request_url'     :  'https://www.google.com/accounts/OAuthGetRequestToken',
          'authorize_url'   :  'https://www.google.com/accounts/OAuthAuthorizeToken',
          'access_url'      :  'https://www.google.com/accounts/OAuthGetAccessToken',
          'consumer_key'    :  'anonymous',
          'consumer_secret' :  'anonymous',
          'scope'           :  'https://docs.google.com/feeds/',
          'app_name'        :  'WatchDoc Google Docs Notification Chrome Extension'
        });
        gdocs = new GoogleDocs(oauth);
        gdocs.initialize();
        gdocs.startPolling();
      }

      document.addEventListener('load', initialize() );

