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
          <li>
            <a href="#">About GooseFlight</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>
        </ul>
      </div>

      <!-- Support -->
      <div class="footer-section">
        <p class="footer-heading">
          Support
        </p>

        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
          <li>
            <a href="#">Trust and safety</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
        </ul>
      </div>

      <!-- Get the app -->
      <div class="footer-section">
        <p class="footer-heading">
          Get the app
        </p>

        <ul>
          <li>
            <a href="#">Tripma for Android</a>
          </li>
          <li>
            <a href="#">Tripma for iOS</a>
          </li>
          <li>
            <a href="#">Mobile site</a>
          </li>
          <li>
            <a href="#"><IconAppStore /></a>
          </li>
          <li>
            <a href="#"><IconGooglePlay /></a>
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
