import React from 'react';

export const Footer: React.FC = () => {
    const FOOTER_ITEMS = [
        { label: "Discover", icon: <DiscoverIcon />, url: "/groups" },
        { label: "My Groups", icon: <GroupsIcon />, url: "/my-groups" },
        { label: "Rewards", icon: <RewardsIcon />, url: "/rewards" },
    ]
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
            <div className="flex items-center justify-between px-4 py-4 pb-8">
                {FOOTER_ITEMS.map((navItem) => (<a key={`${navItem.url}`} href={navItem.url} className="flex items-center flex-col justify-center">
                    <p className="text-gray-800">{navItem.icon}</p>
                    <p className="text-md text-gray-800 font-bold">{navItem.label}</p>
                </a>))}

            </div>
        </nav>
    );
};


const GroupsIcon = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5" />
        <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.88915 20.5843C6.82627 20.8504 7.88256 21 9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 17.3453 2.07657 17.6804 2.22053 18" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>)
}

const RewardsIcon = () => {
    return (<svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512.001 512.001" xmlSpace="preserve">
        <g>
            <g>
                <g>
                    <path d="M448,191.999C448,86.129,361.87,0,256,0C150.132,0,64.001,86.129,64.001,191.999c0,66.862,34.362,125.839,86.346,160.231     v149.102c0,4.117,2.37,7.868,6.089,9.635c1.458,0.693,3.022,1.034,4.578,1.034c2.409,0,4.797-0.816,6.738-2.395l88.247-71.855     l88.248,71.85c3.195,2.601,7.602,3.13,11.32,1.359c3.72-1.77,6.089-5.525,6.084-9.645l-0.155-148.981     C413.568,317.958,448,258.928,448,191.999z M262.735,415.719c-3.924-3.194-9.55-3.194-13.472,0l-77.578,63.167V364.463     c25.467,12.502,54.083,19.535,84.316,19.535c30.174,0,58.741-7.005,84.172-19.462l0.118,114.329L262.735,415.719z M256,362.661     c-94.103,0-170.662-76.559-170.662-170.662S161.897,21.337,256,21.337s170.663,76.559,170.663,170.662     S350.103,362.661,256,362.661z" />
                    <path d="M266.667,53.333c0-5.892-4.776-10.669-10.669-10.669c-82.343,0-149.335,66.991-149.335,149.335     c0,2.252,0.054,4.556,0.159,6.844c0.263,5.719,4.981,10.179,10.648,10.179c0.164,0,0.332-0.003,0.498-0.012     c5.887-0.271,10.438-5.262,10.167-11.147c-0.091-1.965-0.137-3.938-0.137-5.865c0-70.578,57.419-127.998,127.998-127.998     C261.891,64.001,266.667,59.225,266.667,53.333z" />
                    <path d="M405.176,185.152c-0.273-5.886-5.28-10.473-11.15-10.164c-5.887,0.272-10.437,5.265-10.164,11.15     c0.089,1.922,0.133,3.894,0.133,5.861c0,70.578-57.419,127.998-127.998,127.998c-5.891,0-10.669,4.777-10.669,10.669     c0,5.892,4.777,10.669,10.669,10.669c82.344,0,149.335-66.991,149.335-149.335C405.333,189.704,405.281,187.401,405.176,185.152z     " />
                    <path d="M255.993,280.622c0.002,0,0.003,0,0.005,0c3.371,0,6.546-1.594,8.559-4.298l22.633-30.411l37.546-4.338     c3.351-0.386,6.322-2.336,8.011-5.259c1.689-2.921,1.896-6.469,0.559-9.567l-15.019-34.805l15.015-34.685     c1.34-3.096,1.135-6.644-0.549-9.568c-1.685-2.922-4.654-4.876-8.005-5.268l-37.653-4.397l-22.531-30.344     c-2.011-2.709-5.186-4.306-8.56-4.308c-0.002,0-0.004,0-0.006,0c-3.371,0-6.545,1.594-8.557,4.299l-22.631,30.41l-37.544,4.338     c-3.352,0.386-6.322,2.336-8.012,5.259c-1.688,2.921-1.896,6.469-0.558,9.567l15.019,34.805l-15.015,34.685     c-1.34,3.096-1.136,6.644,0.548,9.568c1.686,2.922,4.655,4.876,8.006,5.268l37.651,4.397l22.53,30.344     C249.445,279.023,252.618,280.62,255.993,280.622z M231.956,225.311l-27.975-3.267l11.144-25.747     c1.169-2.7,1.171-5.763,0.005-8.465l-11.159-25.86l27.868-3.22c2.923-0.337,5.578-1.868,7.335-4.229l16.816-22.595l16.723,22.523     c1.753,2.362,4.406,3.894,7.328,4.237l27.978,3.267l-11.145,25.747c-1.169,2.7-1.17,5.763-0.005,8.466l11.161,25.86l-27.869,3.22     c-2.922,0.337-5.578,1.868-7.334,4.228l-16.818,22.597l-16.724-22.524C237.53,227.184,234.878,225.652,231.956,225.311z" />
                    <path d="M132.253,224.719c-1.61-5.669-7.517-8.985-13.184-7.374c-5.668,1.61-8.965,7.483-7.356,13.151l0.083,0.306     c1.335,4.698,5.622,7.781,10.279,7.781c0.96,0,1.935-0.131,2.906-0.406c5.668-1.61,8.965-7.483,7.357-13.151L132.253,224.719z" />
                    <path d="M390,167.035c0.866,0,1.748-0.107,2.625-0.33c5.712-1.445,9.172-7.248,7.726-12.959c-0.042-0.162-0.085-0.33-0.13-0.493     c-1.577-5.677-7.457-8.992-13.133-7.415c-5.678,1.577-8.999,7.466-7.422,13.143C380.889,163.816,385.231,167.035,390,167.035z" />
                </g>
            </g>
        </g>
    </svg>)
}

const DiscoverIcon = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <path d="M17.8 2.1L7.86997 4.59C6.41997 4.95 4.94997 6.42 4.58997 7.87L2.09997 17.8C1.34997 20.8 3.18997 22.65 6.19997 21.9L16.13 19.42C17.57 19.06 19.05 17.58 19.41 16.14L21.9 6.2C22.65 3.2 20.8 1.35 17.8 2.1Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}