define(['durandal/plugins/router'],
    function (router) {
        
        
        var activate = function () {
            var service = $data.initService("https://open.jaystack.net/c72e6c4b-27ba-49bb-9321-e167ed03d00b/6494690e-1d5f-418d-adca-0ac515b7b742/api/mydatabase/");
            return service.then(function (db) {
                db.Airport.asKendoDataSource(vm.airports);
            });

        };



        var deactivate = function () {
        };

        var viewAttached = function (view) {
            //kendo.init($("#airportGrid"));
            //kendo.bind(view, vm);
            //kendo.bind($("#airportGrid"), vm);
        };

        var vm = new kendo.data.ObservableObject({
            activate: activate,
            deactivate: deactivate,
            airports: new kendo.data.DataSource(),
            title: 'Airports',
            viewAttached: viewAttached
        });

        return vm;
    });
