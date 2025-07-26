const script = document.createElement('script');
script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=AW-1111111111');
script.setAttribute('async', '');
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-1111111111', {'allow_enhanced_conversions':true});

analytics.subscribe("checkout_completed", (event) => {
  gtag('set', 'user_data', {
    email: event.data?.checkout?.email,
    phone: event.data?.checkout?.phone,
    address: {
      first_name: event.data?.checkout?.shippingAddress?.firstName,
      last_name: event.data?.checkout?.shippingAddress?.lastName,
      street: event.data?.checkout?.shippingAddress?.address1,
      city: event.data?.checkout?.shippingAddress?.city,
      region: event.data?.checkout?.shippingAddress?.province,
      postal_code: event.data?.checkout?.shippingAddress?.zip,
      provinceCode: event.data?.checkout?.shippingAddress?.provinceCode,
      country: event.data?.checkout?.shippingAddress?.country,
      countryCode: event.data?.checkout?.shippingAddress?.countryCode,
    }
  });

  gtag('event', 'conversion', {
    send_to: 'AW-1111111111/XXXXXXXXXXXXXXXXXXX',
    transaction_id: event.data?.checkout?.order?.id,
    value: event.data?.checkout?.subtotalPrice?.amount,
    currency: event.data?.checkout?.subtotalPrice?.currencyCode,
  });
});
