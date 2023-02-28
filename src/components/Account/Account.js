import React from 'react';

const Account = () => {
    return (
        <div className='user__set '>
            <div className='user__inner'>
                <div className='user__info text-center'>
                  <h3 className='text-[30px] font-[600] leading-[37px]'> <a href="#!">My Account</a>  / <a href="#!">Edit user</a> </h3>
                  <div className='h-[262px] w-[262px] leading-[262px] mx-[auto] mt-[44px] mb-[80px] rounded-[50%] choose__Img'>
                    <p className=''>Change Image</p>
                  </div>
                </div>
                <div className='user__log flex items-center justify-between w-[full] max-w-[656px]'>
                    {/* <div className='flex w-full max-w-[420px] justify-between text-[20px] font-[500] leading-[24px]'>
                        <div className='label'>Username</div>
                        <div className='label'>My_cernamnet_username</div>
                    </div>
                    <div className='flex justify-between items-center w-full max-w-[656px] text-[20px] leading-[24px]'>
                        <div className='label'>First Name</div>
                        <input className='border' type="text" />
                        <a href='#!'>Change</a>
                    </div>
                    <div className='flex justify-between items-center w-full max-w-[656px] text-[20px] leading-[24px]'>
                        <div className='label'>Last Name</div>
                        <input className='border' type="text" />
                        <a href='#!'>Change</a>
                    </div>
                    <div className='flex justify-between items-center w-full max-w-[656px] text-[20px] leading-[24px]'>
                        <div className='label'>Email</div>
                        <input className='border' type="text" />
                        <a href='#!'>Update</a>
                    </div> */}
                    <ul className='userInfo text-[20px] font-[400] leading-[24px]'>
                        <li className='text-[24px] font-[500] mb-[30px]'>Username</li>
                        <li className='mb-[25px]'>First Name</li>
                        <li className='mb-[25px]'>Last Name</li>
                        <li>Email</li>
                    </ul>
                    <ul className='users__login flex flex-col'>
                        <li className='text-[24px] font-[500] mb-[30px]'>My_cernamet_username</li>
                        <input className='mb-[25px] border' type="text" />
                        <input className='mb-[25px] border' type="text" />
                        <input className=' border' type="email"/>
                    </ul>
                    <ul className='text-[20px] font-[400] leading-[24px]'>
                        <li className='invisible mb-[30px]'>Change</li>
                        <li className='mb-[27px]'><a href="#!">Change</a></li>
                        <li className='mb-[27px]'><a href="#!">Change</a></li>
                        <li><a href="#!">Update</a></li>
                    </ul>
                </div>
                <div className='text-center mt-[30px]'>
                    <button>Change Password</button>
                </div>
            </div>
        </div>
    );
};

export default Account;