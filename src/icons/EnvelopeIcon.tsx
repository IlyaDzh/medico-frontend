export const EnvelopeIcon: React.FC<{
    color?: string;
    width?: number;
    height?: number;
}> = ({ color = "#fff", width = 25, height = 21 }) => (
    <svg width={width} height={height} viewBox="0 0 25 21" fill="none">
        <path
            d="M24.5832 6.4013v9.8383c0 2.094-1.6391 3.8053-3.7043 3.9208l-.2228.0062H4.3436c-2.094 0-3.8054-1.639-3.9209-3.7042l-.0062-.2228V6.4013l11.6628 6.1098a.9065.9065 0 00.841 0l11.6629-6.1098zM4.3436.8333H20.656c2.0357 0 3.7097 1.549 3.9075 3.5326l-12.0638 6.3194L.4361 4.3659C.6266 2.4558 2.1859.9486 4.1189.8396l.2247-.0063H20.656 4.3436z"
            fill={color}
        />
    </svg>
);
