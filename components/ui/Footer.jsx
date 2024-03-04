import "./Footer.css"
import { IconBrandInstagram,IconBrandLinkedin,IconBrandTwitter } from "@tabler/icons-react"
import React from 'react'

const Footer = () => {
  return (
	<footer class="footer bg-gray-900 text-white">
	<div class="container mx-auto px-4 py-6 md:flex md:flex-wrap md:justify-between">
	   <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
		  <h4 class="text-lg font-semibold mb-2">Company</h4>
		  <ul>
			 <li class="mb-1"><a href="/about" class="text-sm hover:text-gray-300">About us</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">Services</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">Privacy Policy</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">Affiliate Program</a></li>
		  </ul>
	   </div>
	   <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
		  <h4 class="text-lg font-semibold mb-2">Opportunities</h4>
		  <ul>
			 <li class="mb-1"><a href="/career" class="text-sm hover:text-gray-300">Careers</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">Learning Programs</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">Internships</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">Verify Certificate</a></li>
		  </ul>
	   </div>
	   <div class="w-full md:w-1/2 lg:w-1/4 mb-4">
		  <h4 class="text-lg font-semibold mb-2">Contact Us</h4>
		  <ul>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">+91 93265 85682</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">sales.ok7@gmail.com</a></li>
			 <li class="mb-1"><a href="#" class="text-sm hover:text-gray-300">admin.ok7@gmail.com</a></li>
		  </ul>
	   </div>
	   <div class="w-full md:w-1/2 lg:w-1/4">
		  <h4 class="text-lg font-semibold mb-2">Follow Us</h4>
		  <div class="flex items-center justify-start gap-2">
			 <IconBrandInstagram />
			 <IconBrandLinkedin />
			 <IconBrandTwitter />
		  </div>
	   </div>
	</div>
 </footer>
 
  )
}

export default Footer
