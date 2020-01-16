# Nextcloud Photos
**📸 Your memories under your control**

![](screenshots/screenshot1.png)

## Why is this so awesome?
- **📸 Beautiful Photo und Video Timeline**
- **⭐ Favorites and Tagging:** Favorite and tag your photos!
- **Slideshow and easy sharing** Show slideshows and share your photos or albums easy
- **Albums:** Create albums from your contents
    
    Future plans:
- ...

## 🚀 Installation  
In your Nextcloud, simply enable the Photos app through the Apps management.

Consider installing the [preview generator](https://github.com/rullzer/previewgenerator) for pregenerating thumbnails. 
Please have a look at [CHANGELOG.md](https://github.com/nextcloud/photos/blob/master/CHANGELOG.md) for details about changes.
    
## Mobile Photos
Use the Android/iOS App to view your photos. It's possible to auto-upload them.

##Maintainers:
- [John Molakvoæ](https://github.com/skjnldsv)
If you'd like to join, just go through the [issue list](https://github.com/nextcloud/photos/issues) and fix some. :)
    
## 🏗 Development setup
1.  ☁ Clone this into your `apps` folder of your Nextcloud
2.  👩‍💻 In a terminal, run the command `make dev-setup` to install the dependencies
3.  🏗 Then to build the Javascript whenever you make changes, run `make build-js`. Watch changes with: `make watch-js`
4.  ✅ Enable the app through the app management of your Nextcloud
5.  🎉 Partytime!
6.  💻 Fix easily linting issues with `npm run lint:fix`
