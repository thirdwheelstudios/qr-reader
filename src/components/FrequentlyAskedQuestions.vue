<template>
  <h2>Frequently asked questions</h2>
  <details>
    <summary>What is a QR code?</summary>
    A QR code is a type of barcode that can store various types of data. For
    example, a URL, a phone number, or a text message. QR codes are used in a
    variety of applications, such as tracking inventory, sharing contact
    information, and more.
  </details>
  <details>
    <summary>Can I scan a QR code from a saved image?</summary>
    You can scan QR codes from images or screenshots without using your camera.
    As long as it is saved on your device.
  </details>
  <details>
    <summary>
      Do I need to install any additional apps or browser extensions?
    </summary>
    No, QR Reader works exclusively using functionality that is already built
    into your web browser. There is nothing else that you need to install in
    order to use QR Reader.
  </details>
  <details>
    <summary>Does QR Reader use my data?</summary>
    QR Reader does not collect any data outside of your web browser. For your
    convenience, we keep a history of your previously scanned or created QR
    Codes. These QR codes are stored exclusively in your web browser and are
    never uploaded or shared anywhere else.
  </details>
  <details>
    <summary>Is it safe to use a QR code?</summary>
    QR codes are not unsafe by themselves, but they may contain malicious data
    that can harm your device or compromise your privacy. You should always scan
    QR codes from trusted sources and avoid clicking on suspicious links.
  </details>
  <details>
    <summary>How do I generate a QR code?</summary>
    You can use QR Reader's QR code
    <router-link to="/create">generator</router-link> to generate QR codes with
    ease. Just type in the information you want to store and a QR code will
    appear instantly for you to save and share as you wish.
  </details>
  <details>
    <summary>What are popular uses of QR codes?</summary>
    QR codes have many different use cases including, but not limited to:
    <ul>
      <li>Used on event tickets to allow contactless entry and verfication</li>
      <li>
        Used on product packaging to share product information and setup
        instructions
      </li>
      <li>
        Used on posters and promotions to provide a convenient link to more
        information
      </li>
      <li>
        Used in a museum or art gallery to provide more information about the
        subject
      </li>
      <li>As a digital gift voucher to be given as a present</li>
    </ul>
  </details>
</template>

<style scoped lang="scss">
h2,
details {
  text-align: left;
}

summary {
  font-weight: 700;
}
</style>
