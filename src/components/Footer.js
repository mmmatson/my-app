import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {

    return (
        <div class="w-full fixed inset-x-0 bottom-0 flex justify-center p-4 bg-slate-200 border-t-4 border-slate-300">
            <div><a href="https://github.com/mmmatson" className="footer-icons"><FaGithub /></a></div>
            <div><a href="https://www.linkedin.com/" className="footer-icons"><FaLinkedin /></a></div>
            <div><a href="https://stackoverflow.com/users/21433018/mmmatson" className="footer-icons"><FaStackOverflow /></a></div>
        </div>
    );
}
export default Footer;
