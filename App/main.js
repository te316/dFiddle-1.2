﻿requirejs.config({
    paths: {
      'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text.min'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator','durandal/viewModelBinder'],
  function (app, system, viewLocator, viewModelBinder) {
    
    system.debug(true);
    
    app.title = 'Durandal Samples';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        app.adaptToDevice();
        kendo.ns = "kendo-";
        viewModelBinder.beforeBind = function (obj, view) {
            kendo.bind(view, obj.viewModel || obj);
        };
        app.setRoot('samples/shell');
    });
});
