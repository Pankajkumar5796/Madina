let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};




$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav: false,
    // autoplay: true, 
    // autoplayTimeout: 3000, 
    // autoplayHoverPause: true, 
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.contagious-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive:{
        0:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})

// counter 
$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });



    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText : [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    $(document).ready(function() {
        // Initially hide all dropdown menus
        $('.dropdown-menu').hide();
      
        // Toggle the dropdown on click
        $('.dropdown-toggle').on('click', function(event) {
          event.preventDefault();
      
          // Get the next sibling element which is the dropdown menu
          var $dropdown = $(this).next('.dropdown-menu');
      
          // Close all dropdowns except the one clicked
          $('.dropdown-menu').not($dropdown).slideUp().prev('.dropdown-toggle').removeClass('active');
          
          // Toggle the current dropdown menu
          $dropdown.stop(true, true).slideToggle();
          $(this).toggleClass('active');
        });
      
        // Close the dropdowns if clicked outside the menu
        $(document).on('click', function(event) {
          if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').slideUp();
            $('.dropdown-toggle').removeClass('active');
          }
        });
      });
      



jQuery(document).ready(function($) {
    // Initially hide the dropdown menus
    $('.mobil_menu_wrapper .dropdown.arrow-top').css('display', 'none');
  
    // Toggle the dropdown on click
    $('.mobil_menu_wrapper .dropdown-toggle.nav-link').on('click', function(event) {
      event.preventDefault();
      var $this = $(this);
      var $dropdown = $this.next('.dropdown.arrow-top');
      
      // Toggle active class on the link and slideToggle the dropdown
      $this.toggleClass('active');
      $dropdown.stop(true, true).slideToggle();
    });
  });


//  Remove-item-from-wishlist 
// document.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('remove-from-wishlist')) {
//         e.preventDefault();
//         let productId = e.target.getAttribute('data-product-id');
//         console.log('Removing product ID:', productId);  // Debugging line
        
//         if (productId) {
//             fetch(ajaxurl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 body: `action=custom_remove_from_wishlist&product_id=${productId}`,
//             })
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.success) {
//                     let row = e.target.closest('tr');
//                     if (row) row.remove();
//                 } else {
//                     alert(data.data.message);
//                 }
//             })
//             .catch((error) => {
//                 alert('Error: ' + error);
//             });
//         }
//     }
// });





// document.addEventListener('DOMContentLoaded', function () {
//     const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
  
//     wishlistButtons.forEach(button => {
//       button.addEventListener('click', function (e) {
//         e.preventDefault();
//         const productId = this.dataset.productId;
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
//         if (!wishlist.includes(productId)) {
//           wishlist.push(productId);
//           localStorage.setItem('wishlist', JSON.stringify(wishlist));
//           alert('Product added to wishlist!');
//         } else {
//           alert('Product is already in wishlist!');
//         }
//       });
//     });
//   });



// Perfect-code


// document.addEventListener('DOMContentLoaded', function () {
//     const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
//     const wishlistCountBadge = document.querySelector('.wishlist-count'); // Select the wishlist count element
    
//     // Function to update the wishlist count in the navigation menu
//     function updateWishlistCount() {
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//         wishlistCountBadge.textContent = wishlist.length;  // Update the badge with the number of items
//     }

//     // Initialize the wishlist count on page load
//     updateWishlistCount();

//     wishlistButtons.forEach(button => {
//         button.addEventListener('click', function (e) {
//             e.preventDefault();

//             const productId = this.dataset.productId;
//             let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//             // Check if the product is already in the wishlist
//             if (!wishlist.includes(productId)) {
//                 wishlist.push(productId);
//                 localStorage.setItem('wishlist', JSON.stringify(wishlist));

//                 // Update the button UI
//                 this.textContent = 'Added';
//                 this.classList.add('added');  // Animation class for added state
//                 this.disabled = true;  // Disable the button after adding

//                 // Animate the button (simple scaling effect)
//                 this.classList.add('animate-btn');
//                 setTimeout(() => {
//                     this.classList.remove('animate-btn');
//                 }, 1000);  // Animation duration of 1s

//                 // Update the wishlist count in the navigation
//                 updateWishlistCount();
//             } else {
//                 // If product is already in the wishlist, change button text
//                 this.textContent = 'Already Added';
//                 setTimeout(() => {
//                     this.textContent = 'Add to Wishlist';  // Reset text after a short delay
//                 }, 2000);
//             }
//         });
//     });
// });


// Addto-wish-list & remove to wishlist
// document.addEventListener('DOMContentLoaded', function () {
//     const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
//     const wishlistCountBadge = document.querySelector('.wishlist-count'); // Wishlist count element
//     const popup = document.createElement('div'); // Popup element
//     popup.classList.add('wishlist-popup');
//     document.body.appendChild(popup);

//     // Function to update the wishlist count in the navigation menu
//     function updateWishlistCount() {
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//         wishlistCountBadge.textContent = wishlist.length;  // Update the badge with the number of items
//     }

//     // Function to update the button text after adding/removing from wishlist
//     function updateButtonState(button, productId) {
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//         if (wishlist.includes(productId)) {
//             button.textContent = 'Remove from Wishlist';
//             button.classList.add('remove');  // Add remove class
//             button.classList.remove('add');  // Remove add class
//         } else {
//             button.textContent = 'Add to Wishlist';
//             button.classList.remove('remove');
//             button.classList.add('add');
//         }
//     }

//     // Function to show the success popup with "Remove" option
//     function showPopup(productId) {
//         const productName = document.querySelector(`[data-product-id="${productId}"]`).closest('.product-card').querySelector('h6').textContent;
//         popup.innerHTML = `
//             <div class="popup-content">
//                 <h4>Product Added to Wishlist!</h4>
//                 <p>${productName} has been added to your wishlist.</p>
//                 <button class="remove-from-wishlist" data-product-id="${productId}">Remove from Wishlist</button>
//                 <button class="close-popup">Close</button>
//             </div>
//         `;
//         popup.style.display = 'block'; // Show the popup

//         // Close the popup
//         popup.querySelector('.close-popup').addEventListener('click', function () {
//             popup.style.display = 'none';
//         });

//         // Remove from wishlist when the remove button is clicked
//         popup.querySelector('.remove-from-wishlist').addEventListener('click', function () {
//             let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//             const index = wishlist.indexOf(productId);
//             if (index !== -1) {
//                 wishlist.splice(index, 1);
//                 localStorage.setItem('wishlist', JSON.stringify(wishlist));

//                 // Update the wishlist count and the UI
//                 updateWishlistCount();
//                 updateButtonState(document.querySelector(`[data-product-id="${productId}"]`), productId);
//             }
//             popup.style.display = 'none';  // Close popup after removal
//         });
//     }

//     // Initialize the wishlist count on page load
//     updateWishlistCount();

//     wishlistButtons.forEach(button => {
//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             const productId = this.dataset.productId;
//             let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//             // If the product is not in the wishlist, add it
//             if (!wishlist.includes(productId)) {
//                 wishlist.push(productId);
//                 localStorage.setItem('wishlist', JSON.stringify(wishlist));

//                 // Update the button UI
//                 this.textContent = 'Remove from Wishlist';
//                 this.classList.add('remove');
//                 this.classList.remove('add');

//                 // Update the wishlist count
//                 updateWishlistCount();

//                 // Show the popup
//                 showPopup(productId);
//             } else {
//                 // If the product is already in the wishlist, remove it
//                 const index = wishlist.indexOf(productId);
//                 if (index !== -1) {
//                     wishlist.splice(index, 1);
//                     localStorage.setItem('wishlist', JSON.stringify(wishlist));

//                     // Update the button UI
//                     updateButtonState(this, productId);

//                     // Update the wishlist count
//                     updateWishlistCount();
//                 }
//             }
//         });
//     });
// });




document.addEventListener('DOMContentLoaded', function () {
    const wishlistButtons = document.querySelectorAll('.add-to-wishlist');
    const wishlistCountBadge = document.querySelector('.wishlist-count'); // Wishlist count element

    // Function to update the wishlist count in the navigation menu
    function updateWishlistCount() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlistCountBadge.textContent = wishlist.length;  // Update the badge with the number of items
    }

    // Function to update the button text after adding/removing from wishlist
    function updateButtonState(button, productId) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (wishlist.includes(productId)) {
            button.textContent = 'Remove from Wishlist';
            button.classList.add('remove');  // Add remove class
            button.classList.remove('add');  // Remove add class
        } else {
            button.textContent = 'Add to Wishlist';
            button.classList.remove('remove');
            button.classList.add('add');
        }
    }

    // Initialize button states based on the current wishlist
    function initializeButtons() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlistButtons.forEach(button => {
            const productId = button.dataset.productId;
            updateButtonState(button, productId);
        });
    }

    // Call this function to initialize on page load
    initializeButtons();

    // Initialize the wishlist count on page load
    updateWishlistCount();

    wishlistButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            // If the product is not in the wishlist, add it
            if (!wishlist.includes(productId)) {
                wishlist.push(productId);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));

                // Update the button UI
                updateButtonState(this, productId);

                // Update the wishlist count
                updateWishlistCount();
            } else {
                // If the product is already in the wishlist, remove it
                const index = wishlist.indexOf(productId);
                if (index !== -1) {
                    wishlist.splice(index, 1);
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));

                    // Update the button UI
                    updateButtonState(this, productId);

                    // Update the wishlist count
                    updateWishlistCount();
                }
            }
        });
    });
});









  



    



    
    