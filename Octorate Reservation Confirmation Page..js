<script>
  dataLayer.push({ ecommerce: null }); // Clear previous ecommerce data

  dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: octorateReservation.refer,
      value: octorateReservation.total,
      currency: octorateReservation.currency,      
      checkin: octorateReservation.checkin,
      checkout: octorateReservation.checkout,
      nights: octorateReservation.nights,
      email: octorateReservation.email,
      phone: octorateReservation.phone,
      firstName: octorateReservation.firstName,
      lastName: octorateReservation.lastName,
      country: octorateReservation.country,

      items: [{
        item_id: octorateReservation.rooms[0].id,
        item_name: octorateReservation.rooms[0].name,
        price: octorateReservation.rooms[0].total,
        quantity: octorateReservation.rooms[0].quantity
      }]
    }
  });
</script>
