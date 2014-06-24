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
    "ChangeApplier.md": "Change Applier"
};

withDocPadMetadata = function(content, srcpath) {
    var filename = srcpath.substring(pagesSrcDir.length + 1);
    var title = titles[filename];
    if (!title) {
        title = "TODO TITLE"
    }
    return '---\ntitle: "' + title + '"\nlayout: "default"\n---\n' + content;
}

module.exports = function(grunt) {
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
                    src: ["*.md", "tutorial-gettingStartedWithInfusion/*.md"],
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
