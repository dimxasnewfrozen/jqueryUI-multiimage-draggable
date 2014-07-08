$(document).ready(function () {

	var selected_image_ids = new Array;

	// keep track of what images we checked off
	$(".image_checkbox").click(function () {

		if ($(this).attr("checked") == "checked")
		{		
			selected_image_ids.push($(this).attr("id"));
		}
		else {
			// remove the items from the array - far too complex for what it needs to do.
			for(var i = selected_image_ids.length-1; i >= 0; i--)
			{
				if(selected_image_ids[i] == $(this).attr("id")){
					selected_image_ids.splice(i,1);
				}
			}
		}

		$("#selected_num").html(selected_image_ids.length);
	})


	$(".drop_div ul li").droppable({
		accept: ".image_list li",
        hoverClass: "active",
		revert: true,
		drop: function( event, ui ) {


			$(ui.helper).remove(); //destroy clone
            $(ui.draggable).remove(); //remove from list

			var dropped_object = $(this);
			var image_collection = dropped_object.context.innerText;

			$("#status").html("Success! You've moved: " + selected_image_ids.length + " images to: " + image_collection);

			for(var i = selected_image_ids.length-1; i >= 0; i--)
			{
				$("#image_" + selected_image_ids[i]).parent().parent().fadeOut();
			}

			selected_image_ids = new Array;

		}
	});


	$(".image_list").sortable({

		refreshPositions: true,
		scroll: true,
		delay: 100,
		cursor: "move",
		revert: true,
		helper: "clone",

		start: function (event, ui)
		{
			if (selected_image_ids.length > 1) {

				var image_string = "";
				var max_images = 2;
				var class_counter = 0;

				if (selected_image_ids.length == 2) {
					max_images = 1;
				}

				for (var i=0; i<=max_images; i++)
				{
					var image_link = $("#image_" + selected_image_ids[i]).attr("src");
					class_counter = i+1;
					image_string += '<img src="' + image_link + '" class="photo_helper" id="photo_helper' + class_counter + '" />'
				}

				$(ui.helper).html('<div id="photoHelper">' + image_string + '</div>');
			}

		}
	});

})