/*
Copyright 2014 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

var pagesSrcDir = "infusion-docs";
var imagesSrcDir = "infusion-docs/images";
var pagesDestDir = "src/documents";
var imagesDestDir = "src/static/images";
var docPadOut = "out";

var titles = {
    "APIChangesFrom1_4To1_5.md": "API Changes from 1.4 to 1.5",
    "AuxiliarySchemaForPreferencesFramework.md": "Auxiliary Schema for Preferences Framework",
    "Builder.md": "Builder",
    "ChangeApplier.md": "ChangeApplier",
    "ChangeApplierAPI.md": "ChangeApplier API",
    "ComponentGrades.md": "Component Grades",
    "ComponentLifecycle.md": "Component Lifecycle",
    "ComponentOptionsAndDefaults.md": "Understanding Component Options And Their Defaults",
    "Contexts.md": "Contexts",
    "Cutpoints.md": "Cutpoints",
    "DeclarativeThisismInIoC.md": "Declarative this-ism in IoC",
    "DeprecationsIn1_5.md": "Deprecations in 1.5",
    "Enactors.md": "Enactors",
    "EventInjectionAndBoiling.md": "Event Injection and Boiling",
    "Events.md": "Events",
    "ExpansionOfComponentOptions.md": "Expansion of Component Options",
    "FrameworkConcepts.md": "Framework Concepts",
    "HowToUseInfusionIoC.md": "How to Use Infusion IoC",
    "HowToUseTheRenderer.md": "How To Use The Renderer",
    "InfusionEventSystem.md": "Infusion Event System",
    "Invokers.md": "Invokers",
    "IoCReferences.md": "IoC References",
    "IoCSS.md": "IoCSS",
    "ModelRelay.md": "Model Relay",
    "OptionsMerging.md": "Options Merging",
    "PreferencesEditor.md": "Preferences Editor",
    "PrimarySchemaForPreferencesFramework.md": "Primary Schema for Preferences Framework",
    "ProgressiveEnhancement.md": "Progressive Enhancement",
    "ProtoComponentTypes.md": "ProtoComponent Types",
    "README.md": "Infusion Documentation",
    "Renderer.md": "Renderer",
    "RendererComponents.md": "Renderer Components",
    "RendererComponentTreeExpanders.md": "Renderer Component Tree Expanders",
    "RendererComponentTrees.md": "Renderer Component Trees",
    "RendererDecorators.md": "Renderer Decorators",
    "SubcomponentDeclaration.md": "Subcomponent Declaration",
    "UnderstandingInfusionComponents.md": "Understanding Infusion Components",
    "tutorial-gettingStartedWithInfusion/BasicComponentCreation-LittleComponents.md": "Basic Component Creation - Little Components",
    "tutorial-gettingStartedWithInfusion/DefineANamespaceAndCreateAClosure.md": "Define a namespace and create a closure",
    "tutorial-gettingStartedWithInfusion/EventedComponents.md": "Evented Components",
    "tutorial-gettingStartedWithInfusion/GettingStartedWithInfusion.md": "Getting Started with Infusion",
    "tutorial-gettingStartedWithInfusion/ModelComponents.md": "Model Components",
    "tutorial-gettingStartedWithInfusion/PickAComponentType.md": "Pick a component type",
    "tutorial-gettingStartedWithInfusion/RendererComponents.md": "Renderer Components",
    "tutorial-gettingStartedWithInfusion/SetUpYourEnvironment.md": "Set up your environment",
    "tutorial-gettingStartedWithInfusion/Subcomponents.md": "Subcomponents",
    "tutorial-gettingStartedWithInfusion/ViewComponents.md": "View Components"
};

var withDocPadMetadata = function (content, srcpath) {
    var filename = srcpath.substring(pagesSrcDir.length + 1);
    var title = titles[filename];
    if (!title) {
        title = "TODO TITLE"
    }
    return '---\ntitle: ' + title + '\nlayout: default\n---\n\n' + content;
}

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            pages: pagesDestDir,
            images: imagesDestDir,
            docPadOut: docPadOut
        },
        copy: {
            pages: {
                files: [{
                    expand: true,
                    cwd: pagesSrcDir,
                    src: ["*.md", "tutorial-*/*.md", "to-do/*.md"],
                    dest: pagesDestDir
                }],
                options: {
                    process: withDocPadMetadata
                }
            },
            images: {
                files: [{
                    expand: true,
                    cwd: imagesSrcDir,
                    src: "*",
                    dest: imagesDestDir
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};
