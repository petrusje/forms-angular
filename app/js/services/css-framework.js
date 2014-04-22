'use strict';

formsAngular.provider('cssFrameworkService', [function () {
    // Supported options for framework are:
    //      bs2 = Twitter Bootstrap 2.3.2
    //      bs3 = Bootstrap 3.1.1  (default)
    var config = {
        framework: 'bs3'
    };

    return {
        setOptions : function(options) {
            angular.extend(config, options);
        },
        $get : function() {
            return {
                framework: function() {
                    return config.framework;
                },
                span:function (cols) {
                    var result;
                    switch (config.framework) {
                        case 'bs2' :
                            result = 'span' + cols;
                            break;
                        case 'bs3' :
                            result = 'col-xs-' + cols;
                            break;
                    }
                    return result;
                },
                offset:function (cols) {
                    var result;
                    switch (config.framework) {
                        case 'bs2' :
                            result = 'offset' + cols;
                            break;
                        case 'bs3' :
                            result = 'col-lg-offset-' + cols;
                            break;
                    }
                    return result;
                },
                rowFluid:function () {
                    var result;
                    switch (config.framework) {
                        case 'bs2' : result = 'row-fluid'; break;
                        case 'bs3' : result = 'row'; break;
                    }
                    return result;
                }
            }
        }
    }
}]);