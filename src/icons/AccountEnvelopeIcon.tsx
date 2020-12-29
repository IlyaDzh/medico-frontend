export const AccountEnvelopeIcon: React.FC<{ isNew?: boolean }> = ({ isNew }) =>
    !isNew ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M22 8.608V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V8.608L11.652 13.6644C11.87 13.7785 12.13 13.7785 12.348 13.6644L22 8.608ZM5.25 4H18.75C20.4347 4 21.8201 5.28191 21.9838 6.92355L12 12.1533L2.01619 6.92355C2.17386 5.34271 3.46432 4.09545 5.06409 4.00523L5.25 4H18.75H5.25Z"
                fill="#5a5f6f"
            />
        </svg>
    ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.868 10.651C13.1292 9.37737 12 7.32055 12 5C12 4.66048 12.0242 4.3266 12.0709 4H5.25L5.06409 4.00523C3.46432 4.09545 2.17386 5.34271 2.01619 6.92355L12 12.1533L14.868 10.651ZM22 11.3264V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V8.608L11.652 13.6644C11.87 13.7785 12.13 13.7785 12.348 13.6644L16.4439 11.5186C17.2358 11.8294 18.098 12 19 12C20.0736 12 21.0907 11.7583 22 11.3264Z"
                fill="#5a5f6f"
            />
            <circle cx="19" cy="5" r="5" fill="#e34242" />
        </svg>
    );
