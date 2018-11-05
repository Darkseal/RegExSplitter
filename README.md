# RegEx Splitter

A lightweight ASP.NET Core 2.1 Web Application featuring a tiny JavaScript engine that splits a single-line JavaScript Regular Expression into multiple lines of code.

Copyright (c) 2018, Ryadel - https://www.ryadel.com/

Released under the [MIT License](https://opensource.org/licenses/MIT)

## Introduction

**RegEx Splitter** is a lightweight ASP.NET Core Web Application that I developed during a .NET Core course hosted in Rome, Italy. Its main purpose was to serve as a demonstrative web application for the course students - and a boilerplate for small ASP.NET Core MVC projects for everyone else.

If used as a boilerplate, it provides the following:

- **ASP.NET Core 2.1** framework built and optimized for 64-bit Linux.
- **MVC Support** with C# controllers and Razor views.
- **Multi-Language** support (english & italian) with *fallback-to-english* features and *browser autodetect* capabilities.
- **Bootstrap 4.x & JQuery 3.x** with a different resource loading behaviour for `production` and `development` environments.
- **Opportunistic CDN** approach using the `asp-fallback-*` tag helpers to load external resources from the CDN with a local copy fallback when the CDN is down.

However, since the project also offers a unique "regular expression splitting" feature that I couldn't find anywhere else on the web, I also released it as a stand-alone tool at the following URL:

* https://regexsplitter.ryadel.com/

The web application is currently hosted on a CentOS + NGINX machine using the *.NET Core runtime for Linux* (disclaimer: no Windows machine were harmed in the process).

**RegEx Splitter** is also part of the [Ryadel.IO](https://io.ryadel.com/) project, a collection of free online tools to help developers and system administrators to perform simple task to better fullfill their job.

## Description

**RegEx Splitter**, as its name implies, is a *Regular Expression splitter* for JavaScript programmers: it splits any single-line JavaScript RegEx into multiple lines of code.

For example, let's take the following JavaScript RegExp:

    var re = /([\x7F-\x84]|[\x86-\x9F]|[\uFDD0-\uFDEF]|[\u{1FFFE}-\u{1FFFF}]|[\u{2FFFE}-\u{2FFFF}]|[\u{3FFFE}-\u{3FFFF}]|[\u{4FFFE}-\u{4FFFF}]|[\u{5FFFE}-\u{5FFFF}]|[\u{6FFFE}-\u{6FFFF}]|[\u{7FFFE}-\u{7FFFF}]|[\u{8FFFE}-\u{8FFFF}]|[\u{9FFFE}-\u{9FFFF}]|[\u{AFFFE}-\u{AFFFF}]|[\u{BFFFE}-\u{BFFFF}]|[\u{CFFFE}-\u{CFFFF}]|[\u{DFFFE}-\u{DFFFF}]|[\u{EFFFE}-\u{EFFFF}]|[\u{FFFFE}-\u{FFFFF}]|[\u{10FFFE}-\u{10FFFF}].)/g;
  
Although not being ''extremely long'', it can still cause some readability issues when placed in a standard JavaScript file. Unfortunately, JavaScript does not allow a native multi-line syntax for RegEx literals defined in such way (I wrote about such topic in [this post](https://www.ryadel.com/en/javascript-remove-xml-invalid-chars-characters-string-utf8-unicode-regex/)). **RegEx Splitter** comes to the rescue, converting the above `RegEx literal` into the following `RegExp object`:

	var r = new RegExp(
		"([\\x7F-\\x84]|[\\x86-\\x9F]|[\\uFDD0-\\uFDEF]|[\\u{1FFFE"+
		"}-\\u{1FFFF}]|[\\u{2FFFE}-\\u{2FFFF}]|[\\u{3FFFE}-\\u{3"+
		"FFFF}]|[\\u{4FFFE}-\\u{4FFFF}]|[\\u{5FFFE}-\\u{5FFFF}]"+
		"|[\\u{6FFFE}-\\u{6FFFF}]|[\\u{7FFFE}-\\u{7FFFF}]|[\\u{8"+
		"FFFE}-\\u{8FFFF}]|[\\u{9FFFE}-\\u{9FFFF}]|[\\u{AFFFE}-"+
		"\\u{AFFFF}]|[\\u{BFFFE}-\\u{BFFFF}]|[\\u{CFFFE}-\\u{CFF"+
		"FF}]|[\\u{DFFFE}-\\u{DFFFF}]|[\\u{EFFFE}-\\u{EFFFF}]|["+
		"\\u{FFFFE}-\\u{FFFFF}]|[\\u{10FFFE}-\\u{10FFFF}].)", "g");

That's basically it. The tool also lets you configure some optional values, such as the maximum characters per line.

## Usage

The best way to use **RegEx Splitter** is to go to the following URL:

* https://regexsplitter.ryadel.com/

However, you can also download/clone this GitHub package and run it locally, or fork it and play around with the source code.

## Official Resources
- https://regexsplitter.ryadel.com/ - the online project
- [**RegEx Splitter** project page](https://www.ryadel.com/en/projects/regexsplitter) on Ryadel.com (official development website) - also available in [italian](https://www.ryadel.com/projects/regex-splitter)
- [Ryadel.IO project hub](https://io.ryadel.com/)
