$(document).ready(function(){

/**
 * This object controls the nav bar. Implement the add and remove
 * action over the elements of the nav bar that we want to change.
 *
 * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
 */
var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header",
    "header-container"
]);

/**
 * Function that manage the direction
 * of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}
    
var offset = 250;
var duration = 300;

function topLinkAction() {
    if (jQuery(this).scrollTop() > offset) {
       // $('#top-link-block').fadeIn(duration);
        $('#top-link-block').removeClass('hidden').affix({
             // how far to scroll down before link "slides" into view
             offset: {top:100}
         });
    }
    else {
        //$('#top-link-block').fadeOut(duration);
        $('#top-link-block').addClass('hidden').affix({
             // how far to scroll down before link "slides" into view
             offset: {top:100}
         });
    }
    /* if ( ($(window).height() + 100) < $(document).height() ) {
         $('#top-link-block').removeClass('hidden').affix({
             // how far to scroll down before link "slides" into view
             offset: {top:100}
         });
     }*/
}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    
    topLinkAction();
    
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
offSetManager();
});

