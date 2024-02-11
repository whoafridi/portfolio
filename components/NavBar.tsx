import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import SITEMAP from "./SITEMAP";

import LogoRosetech from "../assets/images/logo-rosetech.svg";

type SidebarClass = "" | "show" | "showing" | "hiding show";

type NavLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    collapse: () => void;
  };

const NavLink: React.FC<NavLinkProps> = ({ children, collapse, ...props }) => (
  <Link onClick={collapse} {...props}>
    {children}
  </Link>
);

const NavItem: React.FC<NavLinkProps & { pathname: string }> = ({
  pathname,
  href,
  children,
  className,
  ...props
}) => (
  <li className="nav-item px-2">
    <NavLink
      {...props}
      href={href}
      className={`nav-link rounded${pathname === href ? " active" : ""}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </NavLink>
  </li>
);

const NavDropdownItem: React.FC<NavLinkProps & { pathname: string }> = ({
  pathname,
  href,
  children,
  className,
  ...props
}) => (
  <li>
    <NavLink
      {...props}
      href={href}
      className={`dropdown-item overflow-hidden ${
        pathname === href ? " active" : ""
      }${className ? " " + className : ""}`}
    >
      {children}
    </NavLink>
  </li>
);

const NavBar: React.FC = () => {
  const router = useRouter();

  const [sidebar, setSidebar] = useState<SidebarClass>("");

  const sidebarToggle = () =>
    setSidebar((sidebar) => {
      if (!sidebar) {
        setTimeout(
          () => setSidebar((sidebar) => (sidebar === "showing" ? "show" : "")),
          500
        );
        return "showing";
      } else if (sidebar === "show") {
        setTimeout(
          () =>
            setSidebar((sidebar) => (sidebar === "hiding show" ? "" : "show")),
          500
        );
        return "hiding show";
      }
    });

  const [serviceDropdown, setServiceDropdown] = useState(false);
  const toggleServiceDropdown = () =>
    setServiceDropdown((serviceDropdown) => !serviceDropdown);

  const collapse = () =>
    setSidebar((sidebar) => {
      setServiceDropdown(false);
      if (sidebar) {
        setTimeout(
          () =>
            setSidebar((sidebar) => (sidebar === "hiding show" ? "" : "show")),
          500
        );
        return "hiding show";
      }
    });

  return (
    <>
      <nav className="align-items-center d-flex navbar navbar-expand-md sticky-top">
        <div className="container shadow-lg rounded-5 py-2 overflow-hidden-sm backdrop-blur-md">
          <NavLink
            collapse={collapse}
            href={SITEMAP._}
            className="fw-bold navbar-brand fw-bold navbar-brand d-flex align-items-center"
          >
            <img
              {...LogoRosetech}
              alt="rosetech-logo"
              width="30"
              height="40"
              className="align-text-top d-inline-block"
            />
            <h6 className="fw-bold mb-0">
              <span className="ms-2">
                ROSE<span className="text-warning">TECH</span>
              </span>
            </h6>
          </NavLink>
          <button
            className="border-0 navbar-toggler"
            type="button"
            aria-controls="offcanvasNavbar"
            onClick={sidebarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end w-75 pt-3 pt-md-0`}
            tabIndex={-1}
          >
            <div className="offcanvas-header py-2">
              <NavLink
                collapse={collapse}
                href={SITEMAP._}
                className="fw-bold navbar-brand fw-bold navbar-brand d-flex align-items-center"
              >
                <h6
                  className="offcanvas-title d-flex align-items-center"
                  id="offcanvasNavbarLabel"
                >
                  <img
                    {...LogoRosetech}
                    alt="rosetech offcanvas logo"
                    width="30"
                    height="40"
                    className="align-text-top d-inline-block"
                  />
                  <span className="ms-1">
                    ROSE<span className="text-warning">TECH</span>
                  </span>
                </h6>
              </NavLink>
              <button
                type="button"
                className="border-0 btn-close"
                aria-label="Close"
                onClick={sidebarToggle}
              />
            </div>
            <div className="offcanvas-body">
              <ul className="flex-grow-1 navbar-nav justify-content-md-center align-items-md-center">
                <li className="dropdown nav-item px-2">
                  <NavLink
                    collapse={collapse}
                    href={SITEMAP.services._}
                    className={`nav-link d-inline-block ${
                      router.pathname.startsWith(SITEMAP.services._)
                        ? "active"
                        : ""
                    }`}
                  >
                    Services
                  </NavLink>
                  <a
                    className={`d-inline-block dropdown-toggle nav-link ps-1 ${
                      router.pathname.startsWith(SITEMAP.services._)
                        ? "active"
                        : ""
                    }`}
                    role="button"
                    aria-expanded={serviceDropdown}
                    onClick={toggleServiceDropdown}
                  />
                  <ul
                    className={`dropdown-menu dropdown-menu-white ${
                      serviceDropdown ? "show" : ""
                    }`}
                  >
                    <NavDropdownItem
                      collapse={collapse}
                      href={SITEMAP.services.technicalresource}
                      pathname={router.pathname}
                    >
                      Technical Resource Augmentation
                    </NavDropdownItem>
                    <NavDropdownItem
                      collapse={collapse}
                      href={SITEMAP.services.customsoftware}
                      pathname={router.pathname}
                    >
                      Custom Software Developement
                    </NavDropdownItem>
                  </ul>
                </li>
                <NavItem
                  collapse={collapse}
                  pathname={router.pathname}
                  href={SITEMAP.case}
                >
                  Case Studies
                </NavItem>
                <NavItem
                  collapse={collapse}
                  pathname={router.pathname}
                  href={SITEMAP.contact}
                >
                  Contact
                </NavItem>
                <NavItem
                  collapse={collapse}
                  pathname={router.pathname}
                  href={SITEMAP.about}
                >
                  About
                </NavItem>
              </ul>
              <div className="d-flex">
                <Link
                  href={SITEMAP.hiredeveloper}
                  type="button"
                  className="btn btn-warning rounded-pill"
                >
                  Hire developers
                  <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`offcanvas offcanvas-end w-75 pt-3 pt-md-0 ${sidebar}`}
        tabIndex={-1}
      >
        <div className="offcanvas-header py-2">
          <NavLink
            collapse={collapse}
            href={SITEMAP._}
            className="fw-bold navbar-brand fw-bold navbar-brand d-flex align-items-center"
          >
            <h6
              className="offcanvas-title d-flex align-items-center"
              id="offcanvasNavbarLabel"
            >
              <img
                {...LogoRosetech}
                alt="rosetech offcanvas logo"
                width="30"
                height="40"
                className="align-text-top d-inline-block"
              />
              <span className="ms-1">
                ROSE<span className="text-warning">TECH</span>
              </span>
            </h6>
          </NavLink>
          <button
            type="button"
            className="border-0 btn-close"
            aria-label="Close"
            onClick={sidebarToggle}
          />
        </div>
        <div className="offcanvas-body">
          <ul className="flex-grow-1 navbar-nav justify-content-md-center align-items-md-center">
            <li className="dropdown nav-item px-2">
              <NavLink
                collapse={collapse}
                href={SITEMAP.services._}
                className={`nav-link d-inline-block ${
                  router.pathname.startsWith(SITEMAP.services._) ? "active" : ""
                }`}
              >
                Services
              </NavLink>
              <a
                className={`d-inline-block dropdown-toggle nav-link ps-1 ${
                  router.pathname.startsWith(SITEMAP.services._) ? "active" : ""
                }`}
                role="button"
                aria-expanded={serviceDropdown}
                onClick={toggleServiceDropdown}
              />
              <ul
                className={`dropdown-menu dropdown-menu-white ${
                  serviceDropdown ? "show" : ""
                }`}
              >
                <NavDropdownItem
                  collapse={collapse}
                  href={SITEMAP.services.technicalresource}
                  pathname={router.pathname}
                >
                  Technical Resource Augmentation
                </NavDropdownItem>
                <NavDropdownItem
                  collapse={collapse}
                  href={SITEMAP.services.customsoftware}
                  pathname={router.pathname}
                >
                  Custom Software Developement
                </NavDropdownItem>
              </ul>
            </li>
            <NavItem
              collapse={collapse}
              pathname={router.pathname}
              href={SITEMAP.case}
            >
              Case Studies
            </NavItem>
            <NavItem
              collapse={collapse}
              pathname={router.pathname}
              href={SITEMAP.contact}
            >
              Contact
            </NavItem>
            <NavItem
              collapse={collapse}
              pathname={router.pathname}
              href={SITEMAP.about}
            >
              About
            </NavItem>
          </ul>
          <div className="d-flex">
            <Link
              href={SITEMAP.hiredeveloper}
              type="button"
              className="btn btn-warning rounded-pill"
            >
              Hire developers
              <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
