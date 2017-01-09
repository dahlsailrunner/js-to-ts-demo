var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/kendo-ui/index.d.ts" />
var KidsProgramming;
(function (KidsProgramming) {
    var ViewModel = (function (_super) {
        __extends(ViewModel, _super);
        function ViewModel() {
            var _this = _super.call(this) || this;
            _super.prototype.init.call(_this, _this); // calls "init" on kendo.data.ObservableObject
            _this.platforms = [
                "",
                "Lego Mindstorms",
                "Snap Circuits",
                "Rasberry Pi",
                "Arduino"
            ];
            _this.isComplete = false;
            _this.models = ["Choose Platform first"];
            return _this;
        }
        ViewModel.prototype.platformChanged = function () {
            var models = [];
            switch (this.selectedPlatform) {
                case "Lego Mindstorms":
                    models = ["Original", "NXT", "EV3"];
                    this.set("isComplete", true);
                    break;
                case "Snap Circuits":
                    models = ["Standard", "Jr.", "Green", "XP", "Light", "Gaming"];
                    this.set("isComplete", true);
                    break;
                case "Rasberry Pi":
                    models = ["v1", "v2", "Zero"];
                    this.set("isComplete", false);
                    break;
                case "Arduino":
                    models = ["Uno", "Leonardo", "101", "Robot"];
                    this.set("isComplete", false);
                    break;
            }
            this.set("models", models);
        };
        ViewModel.prototype.hitIt = function () {
            alert("You have taken your first step with " + this.selectedPlatform + " (" + this.selectedModel + ")!");
        };
        return ViewModel;
    }(kendo.data.ObservableObject));
    KidsProgramming.ViewModel = ViewModel;
})(KidsProgramming || (KidsProgramming = {}));
$(function () {
    var viewModel = new KidsProgramming.ViewModel();
    kendo.bind(document.body, viewModel);
});
//# sourceMappingURL=viewModel.js.map