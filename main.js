jQuery(document).ready(function(){
			jQuery('#hideshow').on('click', function(event) {        
					 jQuery('#content').toggle('show');
			});
			jQuery('#hideshow1').on('click', function(event) {        
					 jQuery('#content1').toggle('show');
			});
			jQuery('#hideshow2').on('click', function(event) {        
					 jQuery('#content2').toggle('show');
			});
			jQuery('#hideshow3').on('click', function(event) {        
				jQuery('#content3').toggle('show');
			});
			jQuery('#hideshow4').on('click', function(event) {        
			jQuery('#content4').toggle('show');
			});
			jQuery('#hideshow5').on('click', function(event) {        
			jQuery('#content5').toggle('show');
			});
			jQuery('#hideshow6').on('click', function(event) {        
			jQuery('#content6').toggle('show');
			});
			jQuery('#hideshow7').on('click', function(event) {        
				jQuery('#content7').toggle('show');
			});
			jQuery('#hideshow8').on('click', function(event) {        
			jQuery('#content8').toggle('show');
			});
			jQuery('#hideshow9').on('click', function(event) {        
			jQuery('#content9').toggle('show');
			});
			jQuery('#hideshow10').on('click', function(event) {        
			jQuery('#content10').toggle('show');
			});
			jQuery('#hideshow11').on('click', function(event) {        
				jQuery('#content11').toggle('show');
				});
				jQuery('#hideshow12').on('click', function(event) {        
					jQuery('#content12').toggle('show');
					});
	});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}