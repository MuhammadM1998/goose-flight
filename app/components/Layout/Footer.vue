<template>
  <footer class="bg-white py-16 pb-6">
    <UContainer class="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
      <AppLogo class="mx-auto md:mx-0" />

      <!-- About -->
      <div class="footer-section">
        <p class="footer-heading">
          About
        </p>

        <ul>
          <li>About GooseFlight</li>
          <li>How it works</li>
          <li>Blog</li>
          <li>Forum</li>
        </ul>
      </div>

      <!-- Support -->
      <div class="footer-section">
        <p class="footer-heading">
          Support
        </p>

        <ul>
          <li>Help Center</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>Trust and safety</li>
          <li>Accessibility</li>
        </ul>
      </div>

      <!-- Get the app -->
      <div class="footer-section">
        <p class="footer-heading">
          Get the app
        </p>

        <ul>
          <li>Tripma for Android</li>
          <li>Tripma for iOS</li>
          <li>Mobile site</li>
          <li>
            <button>
              <IconAppStore />
            </button>
          </li>
          <li>
            <button>
              <IconGooglePlay />
            </button>
          </li>
        </ul>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped>
.footer-section{
  font-family: "Nunito Sans";

  .footer-heading {
    font-size: 18px;
    font-weight: 700;
    color: #6E7491;
  }

  ul {
    color: #7C8DB0;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
