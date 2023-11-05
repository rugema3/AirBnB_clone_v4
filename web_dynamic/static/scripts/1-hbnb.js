$(document).ready(function () {
  // Initialize an empty array to store checked Amenity IDs
  const checkedAmenities = [];

  // Listen for changes on input checkboxes
  $('input[type="checkbox"]').change(function () {
    const amenityID = $(this).data('id');

    if ($(this).is(':checked')) {
      // Add the Amenity ID to the list if the checkbox is checked
      checkedAmenities.push(amenityID);
    } else {
      // Remove the Amenity ID from the list if the checkbox is unchecked
      const index = checkedAmenities.indexOf(amenityID);
      if (index !== -1) {
        checkedAmenities.splice(index, 1);
      }
    }

    // Update the h4 tag inside the Amenities div with the list of checked amenities
    $('.Amenities h4').text('Amenities: ' + checkedAmenities.join(', '));
  });
});
