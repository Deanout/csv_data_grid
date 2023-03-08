# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "handsontable", to: "https://ga.jspm.io/npm:handsontable@12.3.1/index.mjs"
pin "core-js/modules/", to: "https://ga.jspm.io/npm:core-js@3.29.0/modules/"
pin "dompurify", to: "https://ga.jspm.io/npm:dompurify@2.4.5/dist/purify.js"
pin "moment", to: "https://ga.jspm.io/npm:moment@2.29.4/moment.js"
pin "numbro", to: "https://ga.jspm.io/npm:numbro@2.1.2/dist/numbro.min.js"
pin "pikaday", to: "https://ga.jspm.io/npm:pikaday@1.8.2/pikaday.js"
