const defaultUrl = "https://www.nortit.pl";

export const site = {
  name: "NortIT",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultUrl,
  phone: "887 602 981",
  phoneInternational: "+48 887 602 981",
  phoneHref: "tel:+48887602981",
  email: "kontakt@nortit.pl",
  emailHref: "mailto:kontakt@nortit.pl",
  area: "Warszawa i okolice",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Warszawa",
};
