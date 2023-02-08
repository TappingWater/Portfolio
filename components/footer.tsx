import Link from 'next/link';
const Footer = () => {

	const links = () => {
		return (
			<>
			 <ul>			 
			 </ul>			
			</>
		)}

	const year: number = new Date().getFullYear();

	return (
		<footer className='z-20 pt-3 pb-3'>	
			<p className='text-center align-middle'>
			 	<small>Copyright &#169; {year} | All rights reserved </small>
			 </p>
		</footer>
	)
}

export default Footer;