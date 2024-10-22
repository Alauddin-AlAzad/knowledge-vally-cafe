
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center p-4 mx-auto max-w-[1280px] border-b-2'>
             <h1 className='text-4xl' >Knowledge cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;