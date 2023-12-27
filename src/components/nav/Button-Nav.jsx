const ButtonNav = ({ text, url }) => {
  return <li className='flex w-24 border-solid shadow-2xl drop-shadow-4xl px-5 py-2 rounded-3xl bg-green-500 items-center justify-center hover:bg-red-500'>
  <a href={url}>{text}</a>
</li>
};

export default ButtonNav;