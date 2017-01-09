/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/kendo-ui/index.d.ts" />
module KidsProgramming {
    export class ViewModel extends kendo.data.ObservableObject {
        platforms: string[];
        models: string[];
        selectedPlatform: string;
        selectedModel: string;
        isComplete: boolean;

        constructor() {
            super();            // calls base class constructor
            super.init(this);   // calls "init" on kendo.data.ObservableObject

            this.platforms = [
                "",
                "Lego Mindstorms",
                "Snap Circuits",
                "Rasberry Pi",
                "Arduino"
            ];

            this.isComplete = false;
            this.models = ["Choose Platform first"];
        }

        platformChanged() {
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
        }

        hitIt() {
            alert("You have taken your first step with " + this.selectedPlatform + " (" + this.selectedModel + ")!");
        }
    }
}

$(function () {
    var viewModel = new KidsProgramming.ViewModel();
    kendo.bind(document.body, viewModel);
});