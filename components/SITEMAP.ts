const root = "",
  blogRoot = `${root}/blogs`,
  careerRoot = `${root}/career`,
  servicesRoot = `${root}/services`;

const SITEMAP = {
  host: "rosetech.dev",
  staticRoot: `${root}/`,
  _: `${root}/`,
  about: `${root}/about-us`,
  case: `${root}/case-studies`,
  contact: `${root}/contact`,
  hiredeveloper: `${root}/hire-developer`,
  partner: `${root}/partner`,
  services: {
    _: servicesRoot,
    technicalresource: `${servicesRoot}/technical-resource-augmentation`,
    customsoftware: `${servicesRoot}/custom-software-developement`,
  },
  blog: {
    _: blogRoot,
    details: `${blogRoot}/details`,
  },
  career: {
    _: careerRoot,
    details: `${careerRoot}/details`,
  },
};

export default SITEMAP;
