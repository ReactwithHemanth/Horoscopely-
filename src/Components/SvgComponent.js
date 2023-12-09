import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
  Text,
  TSpan,
  Circle,
  Rect,
} from 'react-native-svg';

export const PhoneIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15.029}
    height={19.447}
    {...props}>
    <Defs></Defs>
    <Path
      d="M12.028 17.545V1.9a1.9 1.9 0 0 0-1.9-1.9H1.902a1.9 1.9 0 0 0-1.9 1.9v15.645a1.9 1.9 0 0 0 1.9 1.9h8.244a1.9 1.9 0 0 0 1.356-.573 1.831 1.831 0 0 0 .526-1.327Zm-1.435.446a.615.615 0 0 1-.446.189H1.902a.635.635 0 0 1-.634-.634V1.9a.635.635 0 0 1 .634-.634h8.223a.635.635 0 0 1 .634.634v15.664a.583.583 0 0 1-.167.426Z"
      className="a"
    />
    <Path
      d="M.634 2.473h10.781v1.268H.634zM.634 14.712h10.781v1.268H.634zM6.553 16.424H5.496a.634.634 0 1 0 0 1.268h1.057a.634.634 0 1 0 0-1.268Z"
      className="a"
    />
  </Svg>
);

export const EmailIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.466}
    height={13.423}
    {...props}>
    <Path
      d="M15.475 61H1.491A1.494 1.494 0 0 0 0 62.491v9.941a1.494 1.494 0 0 0 1.491 1.491h13.984a1.494 1.494 0 0 0 1.491-1.491v-9.941A1.494 1.494 0 0 0 15.475 61Zm-.206.994-6.754 6.755L1.7 61.994ZM.994 72.226v-9.534l4.788 4.747Zm.7.7 4.791-4.791L8.166 69.8a.5.5 0 0 0 .7 0l1.634-1.635 4.765 4.765Zm14.275-.7-4.765-4.765 4.768-4.761Z"
      style={{
        fill: '#fff',
        stroke: '#fff',
        strokeWidth: '.5px',
      }}
      transform="translate(.25 -60.75)"
    />
  </Svg>
);

export const SignUpBgTheme = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={314} height={175} {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#9bb2e4" />
        <Stop offset={1} stopColor="#4976d6" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#d4a9ec" />
        <Stop offset={1} stopColor="#b342f2" />
      </LinearGradient>
      <ClipPath id="a">
        <Path
          d="M0 0h314v175H0z"
          style={{
            fill: '#fff',
            stroke: '#707070',
          }}
        />
      </ClipPath>
    </Defs>
    <G
      style={{
        clipPath: 'url(#a)',
      }}>
      <Path
        d="M504.573 963.934s-20.236 71.891 41.661 85.758 52.461 82.9 98.247 88.537 115.167-42.552 123.646-23.484-13.424 33.8-4.1 0 0-157.746 0-157.746Z"
        style={{
          fill: 'url(#b)',
          opacity: 0.42,
        }}
        transform="translate(-400.259 -969.455)"
      />
      <Path
        d="M589.409 915.814c-38.067 74.188-42.7 95.88 0 126.1s88.786 13.237 101.317 59.04 61.963 30.217 71.173 25.569 9.211-196.18 9.211-196.18Z"
        style={{
          fill: 'url(#c)',
          opacity: 0.42,
        }}
        transform="translate(-409.892 -960.088)"
      />
    </G>
  </Svg>
);

export const SignUpTheme2 = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={171} height={51} {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#9bb2e4" />
        <Stop offset={1} stopColor="#4976d6" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#d4a9ec" />
        <Stop offset={1} stopColor="#b342f2" />
      </LinearGradient>
      <ClipPath id="a">
        <Path
          d="M0 0h171v51H0z"
          style={{
            fill: '#fff',
            stroke: '#707070',
          }}
        />
      </ClipPath>
    </Defs>
    <G
      style={{
        opacity: 0.88,
        clipPath: 'url(#a)',
      }}>
      <Path
        d="M6.421 8.635s-19.121 28.911 8.938 36.03 21.43 61.535 42.273 64.089 63.043-26.971 66.568-15.913-6.767 20.075-1.874.068S125.247.265 125.247.265Z"
        style={{
          fill: 'url(#b)',
          opacity: 0.21,
        }}
        transform="rotate(138 74.48 59.051)"
      />
      <Path
        d="M23.519 4.068C-2.26 42.223-7.265 53.036 11.069 69.629s39.337 16.279 43.846 31.99 26.976 16.13 31.237 13.2S95.66.2 95.66.2Z"
        style={{
          fill: 'url(#c)',
          opacity: 0.21,
        }}
        transform="rotate(138 61.471 69.316)"
      />
    </G>
  </Svg>
);
export const FacebookIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.768}
    height={17.768}
    {...props}>
    <Path
      d="M17.768 8.884a8.884 8.884 0 1 0-8.884 8.884h.156v-6.916H7.131V8.627H9.04V6.989a2.673 2.673 0 0 1 2.853-2.932 15.5 15.5 0 0 1 1.711.087v1.985h-1.166c-.92 0-1.1.437-1.1 1.079v1.416h2.2l-.288 2.224h-1.913v6.576a8.887 8.887 0 0 0 6.431-8.54Z"
      style={{
        fill: '#fff',
      }}
    />
  </Svg>
);
export const AppleIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15.286}
    height={17.394}
    {...props}>
    <Path d="M5.068 17.394C2.294 17.379 0 12.026 0 9.3a5.02 5.02 0 0 1 4.9-5.428 5.9 5.9 0 0 1 1.847.429 4.314 4.314 0 0 0 1.055.286 3.42 3.42 0 0 0 .757-.232 6.35 6.35 0 0 1 2.28-.521h.005a4.785 4.785 0 0 1 3.911 1.868l.285.405-.411.293a3.249 3.249 0 0 0-1.657 2.693 3.039 3.039 0 0 0 1.794 2.81c.257.146.523.3.523.627 0 .215-1.817 4.837-4.456 4.837a3.75 3.75 0 0 1-1.5-.345 3.194 3.194 0 0 0-1.339-.3 3.6 3.6 0 0 0-1.061.271 5.444 5.444 0 0 1-1.839.406ZM10.98 0c.061 2.213-1.521 3.749-3.1 3.652A3.527 3.527 0 0 1 10.98 0Z" />
  </Svg>
);
export const SignUpTheme3 = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={375} height={244} {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#9bb2e4" />
        <Stop offset={1} stopColor="#4976d6" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#d4a9ec" />
        <Stop offset={1} stopColor="#b342f2" />
      </LinearGradient>
      <ClipPath id="a">
        <Path
          d="M0 0h375v244H0z"
          style={{
            fill: '#fff',
            stroke: '#707070',
          }}
        />
      </ClipPath>
    </Defs>
    <G
      style={{
        clipPath: 'url(#a)',
      }}>
      <Path
        d="M30.518 7.568s-72.875 168.5 20.691 190.123 71.7 180.857 138.091 191.657 137.705-40.934 148.466-3.405 51.216-64.28 69.613-133.287.048-241.951.048-241.951Z"
        style={{
          fill: 'url(#b)',
          opacity: 0.42,
        }}
        transform="rotate(-23 -220.101 137.776)"
      />
      <Path
        d="M79.33-27.907c-95.409 137.591-101.4 227.243-33.242 287.361S207.333 295.862 235.66 392.07s120.582-24.081 136.373-34.634c1.169-.781 25.2-56.822 25.956-61.148C406.9 245.32 359.547 9.447 359.547 9.447Z"
        style={{
          fill: 'url(#c)',
          opacity: 0.42,
        }}
        transform="rotate(-23 -167.548 77.892)"
      />
    </G>
  </Svg>
);
export const HIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={39}
      height={46}
      viewBox="0 0 39 46"
      {...props}>
      <Text
        transform="translate(0 33)"
        fill="#fff"
        fontSize="37px"
        fontFamily="Molle">
        <TSpan x={0} y={0}>
          {'H'}
        </TSpan>
      </Text>
    </Svg>
  );
};
export const DearSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={55}
      height={55}
      viewBox="0 0 55 55"
      {...props}>
      <Defs></Defs>
      <G filter="url(#a)">
        <G
          transform="translate(9 6) translate(-9 -6) translate(9 6)"
          fill="rgba(255,255,255,.22)"
          stroke="#fff"
          opacity={0.29}>
          <Circle cx={18.5} cy={18.5} r={18.5} stroke="none" />
          <Circle cx={18.5} cy={18.5} r={18} fill="none" />
        </G>
      </G>
      <Path
        className="b"
        d="M15.584 17a4.323 4.323 0 00.181-1.464c-.093-.309-.929-2.2-1.426-3.408a4 4 0 01-.266-.97c-.012-.6.775-2.131.6-3.153s-2.002-2.361-1.76-2.574 2.55-.108 2.73-.353.494-.529.283-.9a14.955 14.955 0 00-2.362-1.445c-.106-.106-.264-1.937-1.5-1.76.387 2.448-.087 3.347-2.184 4.121-.3.3-.214 1.434-.08 1.941.493 2.715-3.4 1.514-4.632 1.532-1.26-.071-1.925-.219-3.076.542a1.461 1.461 0 01-1.921-.187c-.775 1.218 1.372 1.157 1.255 1.494a3.634 3.634 0 00-.037 2.2 1.45 1.45 0 01.135.784c-.158.51-1.408 1.735-1.408 2.373s.09 2.193.09 2.193-.1.9.1.9 1.215-.035 1.465-.035-.123-.817-.629-.869c0-.194.116-2.109.116-2.109l1.486-1.786a9.06 9.06 0 00.408 2.1c.237.348 1.064 1.926 1.064 1.926s-.052.661.1.661 1.014-.023 1.325-.023-.07-.854-.55-.8c-.182-.285-.591-1.865-.712-2.213a9.769 9.769 0 01-.136-2.087c.015-.521.538.385 2.99.369a9.478 9.478 0 003.248-.369s.534 4.1.571 4.4c.05.324-.053.674.114.674s1.162.007 1.449.007.056-.947-.615-.946a17.494 17.494 0 01-.234-2.261l1.07-1.965a22.269 22.269 0 011.887 2.122 4.288 4.288 0 01.123 1.628 2.035 2.035 0 00-.284.428 8.163 8.163 0 00.919.922c.467-.1.5-.716.39-1.064a2 2 0 00-.287-.576z"
        transform="translate(9 6) translate(11 9)"
      />
      <Path
        className="b"
        d="M9.565 3.933c1.332-.718.391-2.24.11-2.064.153.6.069 1.55-.81 1.491s-.911-1.814.557-2.2 2.683 2.437-.24 3.388c1.914.141 2.913-.74 2.713-3.054S6.868-.35 6.786 2.258s2.23 1.922 2.779 1.675z"
        transform="translate(9 6) translate(11 9)"
      />
    </Svg>
  );
};
export const SunSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25.08}
      height={25.08}
      viewBox="0 0 25.08 25.08"
      {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M3.261 1.784L1.784.306A1.045 1.045 0 00.306 1.784l1.478 1.478a1.045 1.045 0 001.478-1.478z"
        transform="translate(3.367 3.367)"
      />
      <Path
        className="a"
        d="M3.135 0h-2.09a1.045 1.045 0 000 2.09h2.09a1.045 1.045 0 000-2.09z"
        transform="translate(0 11.495)"
      />
      <Path
        className="a"
        d="M3.261.306a1.045 1.045 0 00-1.478 0L.306 1.784a1.045 1.045 0 101.478 1.478l1.478-1.478A1.045 1.045 0 003.261.306z"
        transform="translate(3.367 18.146)"
      />
      <Path
        className="a"
        d="M1.045 0A1.045 1.045 0 000 1.045v2.09a1.045 1.045 0 102.09 0v-2.09A1.045 1.045 0 001.045 0z"
        transform="translate(11.495 20.9)"
      />
      <Path
        className="a"
        d="M3.261 1.784L1.783.306A1.045 1.045 0 10.305 1.784l1.478 1.478a1.045 1.045 0 101.478-1.478z"
        transform="translate(18.146 18.146)"
      />
      <Path
        className="a"
        d="M3.135 0h-2.09a1.045 1.045 0 100 2.09h2.09a1.045 1.045 0 100-2.09z"
        transform="translate(20.9 11.495)"
      />
      <Path
        className="a"
        d="M3.261.306a1.045 1.045 0 00-1.478 0L.305 1.784a1.045 1.045 0 101.478 1.478l1.478-1.478a1.045 1.045 0 000-1.478z"
        transform="translate(18.146 3.367)"
      />
      <Path
        className="a"
        d="M1.045 0A1.045 1.045 0 000 1.045v2.09a1.045 1.045 0 002.09 0v-2.09A1.045 1.045 0 001.045 0z"
        transform="translate(11.495)"
      />
      <Path
        className="a"
        d="M6.793 0a6.793 6.793 0 106.793 6.793A6.8 6.8 0 006.793 0zm0 11.5a4.7 4.7 0 114.7-4.7 4.708 4.708 0 01-4.7 4.7z"
        transform="translate(5.747 5.748)"
      />
    </Svg>
  );
};

export const CalenderSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M23.062 16.5a.937.937 0 00.938-.938V5.625a3.754 3.754 0 00-3.75-3.75h-1.219V.937a.937.937 0 00-1.875 0v.937h-4.265V.937a.937.937 0 00-1.875 0v.937H6.8V.937a.937.937 0 10-1.875 0v.937H3.75A3.754 3.754 0 000 5.625V20.25A3.754 3.754 0 003.75 24h16.5A3.754 3.754 0 0024 20.25a.938.938 0 00-1.875 0 1.877 1.877 0 01-1.875 1.875H3.75a1.877 1.877 0 01-1.875-1.875V5.625A1.877 1.877 0 013.75 3.75h1.172v.938a.937.937 0 001.875 0V3.75h4.219v.938a.938.938 0 001.875 0V3.75h4.266v.938a.938.938 0 001.875 0V3.75h1.218a1.877 1.877 0 011.875 1.875v9.937a.937.937 0 00.937.938z"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(4.909 8.914)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(13.083 8.914)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(17.143 8.914)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(4.909 12.974)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(4.909 17.088)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(9.023 8.914)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(9.023 12.974)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(9.023 17.088)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(13.083 12.974)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(17.143 12.974)"
      />
      <Circle
        className="a"
        cx={0.933}
        cy={0.933}
        r={0.933}
        transform="translate(13.083 17.088)"
      />
    </Svg>
  );
};

export const ArrowLeft = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10.526}
      height={6}
      viewBox="0 0 10.526 6"
      {...props}>
      <Path
        d="M5.263 6a.735.735 0 01-.521-.216L.216 1.259A.737.737 0 011.258.217l4 4 4-4a.74.74 0 011.051 1.042L5.783 5.785a.735.735 0 01-.52.215z"
        fill={props.fill}
      />
    </Svg>
  );
};
export const SaturnSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M13.944 18.047a.645.645 0 010-1.289h3.72a10.013 10.013 0 002.118-3.867h-1.544a.645.645 0 010-1.289h1.826a10.238 10.238 0 00.111-1.5 9.957 9.957 0 00-.249-2.217A43.594 43.594 0 017.864 19.946a10.072 10.072 0 008.446-1.9zm2.148-3.867a.645.645 0 11-.645.645.645.645 0 01.645-.645zM17.225 2.967a10.1 10.1 0 00-14.289-.01q-.234.234-.449.48H5.35a.645.645 0 110 1.289H1.522a9.981 9.981 0 00-.865 1.719h3.4a.645.645 0 010 1.289h-3.8a10.118 10.118 0 00-.256 1.719h3.2a.645.645 0 010 1.289h-3.2a10.118 10.118 0 00.256 1.719h3.375a.645.645 0 110 1.289H.657a10.076 10.076 0 002.289 3.5.645.645 0 00.739.122 30.648 30.648 0 007.752-5.91 30.649 30.649 0 005.91-7.752.645.645 0 00-.122-.743zM7.069 10.742a.645.645 0 11.646-.642.645.645 0 01-.646.642zM9.215 4.3a.645.645 0 11.645-.645.645.645 0 01-.645.645zm2.578 2.148a.645.645 0 11.645-.645.645.645 0 01-.642.642z"
        transform="translate(.923 .902)"
      />
      <Path
        className="a"
        d="M21.349.65a2.985 2.985 0 00-2.893-.517 10.558 10.558 0 00-2.171.777 11.426 11.426 0 012.775 2.05 1.934 1.934 0 01.367 2.217 31.96 31.96 0 01-6.156 8.1 31.959 31.959 0 01-8.1 6.156 1.944 1.944 0 01-.852.2 1.921 1.921 0 01-1.366-.565 11.372 11.372 0 01-2.05-2.776 10.561 10.561 0 00-.777 2.171A2.985 2.985 0 00.65 21.35c1.045 1.045 3.053.827 5.808-.631A35.728 35.728 0 0014.5 14.5a35.728 35.728 0 006.218-8.042C22.176 3.7 22.395 1.7 21.349.65z"
      />
    </Svg>
  );
};
export const ShareSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.25}
      height={21}
      viewBox="0 0 19.25 21"
      {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M18.593 3.5A2.844 2.844 0 1115.75.656 2.844 2.844 0 0118.593 3.5zm0 0"
      />
      <Path
        className="a"
        d="M15.75 7a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm0-5.688A2.188 2.188 0 1017.937 3.5a2.19 2.19 0 00-2.187-2.187zm0 0M18.593 17.5a2.844 2.844 0 11-2.844-2.844 2.844 2.844 0 012.844 2.844zm0 0"
      />
      <Path
        className="a"
        d="M15.75 21a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm0-5.688a2.188 2.188 0 102.187 2.188 2.19 2.19 0 00-2.187-2.187zm0 0M6.344 10.5A2.844 2.844 0 113.5 7.656 2.844 2.844 0 016.344 10.5zm0 0"
      />
      <Path
        className="a"
        d="M3.5 14A3.5 3.5 0 117 10.5 3.5 3.5 0 013.5 14zm0-5.687A2.187 2.187 0 105.688 10.5 2.19 2.19 0 003.5 8.312zm0 0"
      />
      <Path
        className="a"
        d="M5.566 10.08a.875.875 0 01-.434-1.635l8.119-4.629a.875.875 0 11.866 1.521L5.998 9.966a.869.869 0 01-.432.115zm0 0M13.683 17.301a.87.87 0 01-.432-.115l-8.119-4.629a.875.875 0 01.866-1.521l8.119 4.629a.875.875 0 01-.434 1.635zm0 0"
      />
    </Svg>
  );
};
export const OrbitSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.75}
      height={22.75}
      viewBox="0 0 22.75 22.75"
      {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M11.375 0A11.375 11.375 0 1022.75 11.375 11.375 11.375 0 0011.375 0zm0 18.74A7.366 7.366 0 019.416 4.274a2 2 0 013.918 0 7.366 7.366 0 01-1.959 14.466z"
      />
      <Circle
        className="a"
        cx={0.667}
        cy={0.667}
        r={0.667}
        transform="translate(10.709 4.01)"
      />
      <Circle
        className="a"
        cx={2.5}
        cy={2.5}
        r={2.5}
        transform="translate(9 9)"
      />
      <Path
        className="a"
        d="M13.144 5.607a2 2 0 01-3.538 0 6.032 6.032 0 103.538 0zm-1.769 9.145a3.377 3.377 0 113.377-3.377 3.381 3.381 0 01-3.377 3.377z"
      />
    </Svg>
  );
};

export const NotificationSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.72}
      height={28.713}
      viewBox="0 0 22.72 28.713"
      {...props}>
      <Path
        d="M22.251 22.85A4.461 4.461 0 0120.895 21c-1.168-2.472-1.413-5.955-1.413-8.441v-.032a8.147 8.147 0 00-4.8-7.389V3.2a3.2 3.2 0 00-3.19-3.2h-.265a3.2 3.2 0 00-3.193 3.2v1.942a8.147 8.147 0 00-4.8 7.421c0 2.486-.245 5.968-1.413 8.441A4.461 4.461 0 01.466 22.85a.818.818 0 00-.449.93.856.856 0 00.844.657h6.166a4.331 4.331 0 008.661 0h6.168a.856.856 0 00.844-.657.818.818 0 00-.449-.93zM9.717 3.2a1.514 1.514 0 011.511-1.513h.265a1.514 1.514 0 011.51 1.513v1.4a8.147 8.147 0 00-3.286 0V3.2zm1.643 23.829a2.654 2.654 0 01-2.648-2.59h5.3a2.654 2.654 0 01-2.652 2.589zm3.387-4.275H2.781a8.814 8.814 0 00.441-.774c1.127-2.223 1.7-5.391 1.7-9.415a6.439 6.439 0 1112.878 0v.031c0 4.008.575 7.164 1.7 9.381a8.82 8.82 0 00.441.774z"
        fill="#fff"
        opacity={0.5}
      />
    </Svg>
  );
};
export const SolidSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.5}
      height={22.5}
      viewBox="0 0 22.5 22.5"
      {...props}>
      <Path
        d="M8.796 20.297a.017.017 0 11-.017-.017.017.017 0 01.017.017zm-1.908-2.295l-1.613 2.794a11.4 11.4 0 01-3.57-3.57l2.793-1.613a8.106 8.106 0 002.39 2.389zm-1.618-.034a.921.921 0 10-1.843 0v.586a.4.4 0 00.4.4h1.039a.4.4 0 00.4-.4zm5.574 4.532a11.183 11.183 0 01-4.878-1.3l1.613-2.793a7.984 7.984 0 003.265.874zm-1.06-1.935h-.266a.787.787 0 10-1.479 0h-.265v.8h2.01zm3.821-11.5a1.376 1.376 0 01.747-.6.584.584 0 00.33-.28 2.212 2.212 0 01-.486.157 1.42 1.42 0 00-.824.495 3.249 3.249 0 01.234.226zm-9.261 8.786a.117.117 0 00-.117.117v.184h.234v-.184a.117.117 0 00-.117-.117zm6.9-9.817h.118a1.389 1.389 0 01.106-.949.583.583 0 00.035-.432 2.237 2.237 0 01-.233.454 1.44 1.44 0 00-.232.931c.075-.001.143-.004.212-.004zm-3.214 3.1a1.406 1.406 0 01-.949-.106.584.584 0 00-.432-.035 2.235 2.235 0 01.454.233 1.44 1.44 0 00.931.232c0-.068-.007-.136-.007-.205.007-.043.008-.082.01-.121zm6.427.237a1.406 1.406 0 01.949.106.583.583 0 00.432.035 2.235 2.235 0 01-.454-.233 1.44 1.44 0 00-.931-.232c0 .068.007.136.007.205.007.038.005.077.004.117zm-6.88-7.274L5.964 1.304A11.183 11.183 0 0110.844 0v3.219a7.984 7.984 0 00-3.265.876zm.365-2.429a.858.858 0 01.006.761l-.004.015a.4.4 0 00.361.579h.8a.4.4 0 00.364-.573l-.017-.037a.849.849 0 01.006-.738l.008-.017a.4.4 0 00-.361-.579h-.8a.4.4 0 00-.358.584zm6.968 2.429a7.984 7.984 0 00-3.265-.876V0a11.183 11.183 0 014.878 1.3zm-.428-2.505a.4.4 0 00-.263-.286l-.755-.252a.4.4 0 00-.527.423l.1.93a.4.4 0 00.689.239l.658-.678a.4.4 0 00.1-.376zm1.124 2.909l1.613-2.794a11.4 11.4 0 013.57 3.57L17.996 6.89a8.106 8.106 0 00-2.383-2.392zm1.551-.033a.8.8 0 10.8-.8.8.8 0 00-.793.797zm1.242 3.118l2.793-1.613a11.183 11.183 0 011.308 4.871h-3.219a7.984 7.984 0 00-.875-3.261zm1.295 1.658a.4.4 0 00.4.4h.8a.4.4 0 00.4-.4v-.8a.4.4 0 00-.4-.4h-.8a.4.4 0 00-.4.4zm-18.392 7.29a11.183 11.183 0 01-1.3-4.878h3.219a7.984 7.984 0 00.876 3.265zm.308-3.269l-.651.884.648.477.706-.959h.495v-.8a.4.4 0 00-.4-.4h-.8v.8zm1.609-2.421H0a11.183 11.183 0 011.3-4.878l2.793 1.613a7.984 7.984 0 00-.874 3.265zm-.475-2.107a.921.921 0 10-1.843 0v.586a.4.4 0 00.4.4H2.34a.4.4 0 00.4-.4zm1.758-1.85L1.708 5.274a11.4 11.4 0 013.57-3.57l1.613 2.794a8.105 8.105 0 00-2.39 2.39zm-.72-1.87h1.206a.4.4 0 00.4-.4v-.4a.4.4 0 00-.4-.4h-1.21a.4.4 0 00-.4.4v.4a.4.4 0 00.4.401zm-1.96 3.6a.117.117 0 00-.117.117v.184h.235v-.184a.117.117 0 00-.122-.114zm11.842 4.755a3.247 3.247 0 01-.227.233 1.376 1.376 0 01.6.747.584.584 0 00.28.33 2.211 2.211 0 01-.156-.486 1.42 1.42 0 00-.495-.824zm1.253 5.033l1.613 2.793a11.183 11.183 0 01-4.878 1.3v-3.217a7.984 7.984 0 003.265-.876zm-.417 2.176a.921.921 0 00-1.843 0v.586a.4.4 0 00.4.4h1.039a.4.4 0 00.4-.4zM8.838 11.25a2.412 2.412 0 112.412 2.412 2.412 2.412 0 01-2.412-2.412zm3.216-.406h.8v-.8h-.8zm-1.61 1.21v.8h1.61v-.8zm-.984-1.968l.36.719.3-.148a.386.386 0 01.329-.008v1h.8v-1.205a.4.4 0 00-.118-.284 1.19 1.19 0 00-1.375-.223zm4.119 10.378a.117.117 0 00-.117.117v.184h.235v-.184a.117.117 0 00-.117-.117zm3.647.332l-1.613-2.794a8.106 8.106 0 002.39-2.39l2.794 1.613a11.4 11.4 0 01-3.57 3.57zm.072-2.761a.811.811 0 10.8-.914.866.866 0 00-.8.914zM11.25 4.013a7.237 7.237 0 11-7.237 7.237 7.246 7.246 0 017.237-7.237zM6.701 7.27l.461.461a1.426 1.426 0 01.25.337 1.411 1.411 0 01.141.393 2.226 2.226 0 00.509 1.034l-2.23-.924-.308.743 2.425 1-.059.02a.591.591 0 01-.444-.031 1.39 1.39 0 00-1.239 0l-1.169.584a.4.4 0 00.18.761h.652a1.424 1.424 0 01.413.061 1.44 1.44 0 01.38.179 2.224 2.224 0 001.089.371l-2.229.923.308.743 2.426-1.005-.028.056a.58.58 0 01-.337.291 1.391 1.391 0 00-.876.876l-.413 1.239a.4.4 0 00.666.411l.461-.461a1.427 1.427 0 01.336-.25 1.41 1.41 0 01.393-.141 2.226 2.226 0 001.034-.509l-.924 2.23.743.308 1-2.425.02.059a.585.585 0 01-.031.444 1.39 1.39 0 000 1.239l.584 1.169a.4.4 0 00.762-.18v-.652a1.425 1.425 0 01.061-.413 1.442 1.442 0 01.179-.38 2.223 2.223 0 00.371-1.09l.924 2.229.743-.308-1.001-2.418.056.028a.58.58 0 01.292.337 1.391 1.391 0 00.876.876l1.239.413a.4.4 0 00.412-.666l-.461-.461a1.426 1.426 0 01-.25-.337 1.411 1.411 0 01-.144-.39 2.226 2.226 0 00-.509-1.034l2.23.924.308-.743-2.425-1 .059-.02a.591.591 0 01.444.031 1.39 1.39 0 001.239 0l1.169-.584a.4.4 0 00-.18-.762h-.652a1.424 1.424 0 01-.413-.061 1.44 1.44 0 01-.38-.179 2.225 2.225 0 00-1.09-.371l2.229-.923-.308-.743-2.421.997.028-.056a.58.58 0 01.337-.292 1.391 1.391 0 00.876-.876l.413-1.239a.4.4 0 00-.666-.411l-.461.461a1.427 1.427 0 01-.336.25 1.41 1.41 0 01-.393.141 2.226 2.226 0 00-1.034.509l.924-2.23-.743-.308-1 2.425-.02-.059a.585.585 0 01.031-.444 1.39 1.39 0 000-1.239l-.59-1.164a.4.4 0 00-.762.18v.652a1.425 1.425 0 01-.061.413 1.442 1.442 0 01-.179.38 2.223 2.223 0 00-.371 1.09l-.923-2.235-.743.308 1.005 2.426-.056-.028a.58.58 0 01-.292-.337 1.391 1.391 0 00-.876-.876l-1.239-.413a.4.4 0 00-.412.666zm2.135 1.858a3.248 3.248 0 01.227-.233 1.376 1.376 0 01-.6-.747.584.584 0 00-.28-.33 2.211 2.211 0 01.156.486 1.42 1.42 0 00.495.824zm12.363 7.4l-2.793-1.613a7.984 7.984 0 00.876-3.265h3.219a11.183 11.183 0 01-1.302 4.88zm-.576-1.984a.811.811 0 10-.914-.8.866.866 0 00.914.8zm-9.373-.075h-.118a1.389 1.389 0 01-.106.949.583.583 0 00-.035.432 2.237 2.237 0 01.233-.454 1.44 1.44 0 00.232-.931c-.068-.001-.137.002-.206.002zm-2.356-1.032a1.376 1.376 0 01-.747.6.584.584 0 00-.33.28 2.212 2.212 0 01.486-.156 1.42 1.42 0 00.824-.495q-.121-.109-.233-.229z"
        fill={props.fill}
      />
    </Svg>
  );
};

export const MoreSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}>
      <Path
        d="M11 0a11 11 0 1011 11A10.994 10.994 0 0011 0zm4.956 11.733h-4.223v4.223a.733.733 0 11-1.467 0v-4.223H6.044a.733.733 0 110-1.467h4.223V6.044a.733.733 0 111.467 0v4.223h4.223a.733.733 0 110 1.467z"
        fill={props.fill}
      />
    </Svg>
  );
};
export const SettingSvg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25.5}
      height={25.5}
      viewBox="0 0 25.5 25.5"
      {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M13.284 25h-1.568a2.3 2.3 0 01-2.3-2.3v-.531a10.093 10.093 0 01-1.567-.651l-.376.376a2.3 2.3 0 01-3.255 0l-1.111-1.11a2.3 2.3 0 010-3.255l.376-.376a10.093 10.093 0 01-.651-1.567H2.3a2.3 2.3 0 01-2.3-2.3v-1.57a2.3 2.3 0 012.3-2.3h.531a10.1 10.1 0 01.651-1.567l-.376-.376a2.3 2.3 0 010-3.255l1.11-1.111a2.3 2.3 0 013.255 0l.376.376a10.1 10.1 0 011.567-.651V2.3a2.3 2.3 0 012.3-2.3h1.569a2.3 2.3 0 012.3 2.3v.531a10.093 10.093 0 011.567.651l.376-.376a2.3 2.3 0 013.255 0l1.109 1.109a2.3 2.3 0 010 3.255l-.376.376a10.094 10.094 0 01.651 1.567h.535a2.3 2.3 0 012.3 2.3v1.569a2.3 2.3 0 01-2.3 2.3h-.531a10.1 10.1 0 01-.651 1.567l.376.376a2.3 2.3 0 010 3.255l-1.109 1.109a2.3 2.3 0 01-3.255 0l-.376-.376a10.1 10.1 0 01-1.567.651v.536a2.3 2.3 0 01-2.303 2.3zm-5.192-5.021a8.633 8.633 0 002.238.929.732.732 0 01.549.709V22.7a.838.838 0 00.837.837h1.569a.838.838 0 00.837-.837v-1.083a.732.732 0 01.549-.709 8.633 8.633 0 002.238-.929.732.732 0 01.891.113l.766.766a.836.836 0 001.183 0l1.11-1.11a.836.836 0 000-1.183l-.766-.766a.732.732 0 01-.113-.891 8.632 8.632 0 00.929-2.238.732.732 0 01.709-.549H22.7a.838.838 0 00.837-.837v-1.568a.838.838 0 00-.837-.837h-1.083a.732.732 0 01-.709-.549 8.634 8.634 0 00-.929-2.238.732.732 0 01.113-.891l.766-.766a.836.836 0 000-1.183l-1.11-1.11a.836.836 0 00-1.183 0l-.766.766a.732.732 0 01-.891.113 8.633 8.633 0 00-2.238-.929.732.732 0 01-.549-.709V2.3a.838.838 0 00-.837-.837h-1.568a.838.838 0 00-.837.837v1.083a.732.732 0 01-.549.709 8.633 8.633 0 00-2.238.929.733.733 0 01-.892-.113l-.766-.766a.836.836 0 00-1.183 0l-1.11 1.11a.836.836 0 000 1.183l.766.766a.732.732 0 01.113.891 8.632 8.632 0 00-.929 2.238.732.732 0 01-.709.549H2.3a.838.838 0 00-.837.837v1.569a.838.838 0 00.837.837h1.083a.732.732 0 01.709.549 8.634 8.634 0 00.929 2.238.732.732 0 01-.113.891l-.766.766a.836.836 0 000 1.183l1.11 1.11a.836.836 0 001.183 0l.766-.766a.736.736 0 01.891-.113z"
        transform="translate(.25 .25)"
      />
      <Path
        className="a"
        d="M12.5 17.94a5.439 5.439 0 115.439-5.439A5.446 5.446 0 0112.5 17.94zm0-9.414a3.975 3.975 0 103.975 3.975A3.979 3.979 0 0012.5 8.526z"
        transform="translate(.25 .25)"
      />
    </Svg>
  );
};

export const RectangleSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={342} height={110} {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={0.947}
        x2={0.099}
        y1={0.021}
        y2={0.981}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#32a0ee" />
        <Stop offset={1} stopColor="#20c9f3" />
      </LinearGradient>
    </Defs>
    <G
      style={{
        filter: 'url(#a)',
      }}>
      <G
        style={{
          stroke: 'rgba(255,255,255,.14)',
          strokeWidth: 2,
          fill: 'url(#b)',
        }}
        transform="translate(7.5 5.5)">
        <Rect
          width={327}
          height={95}
          stroke="none"
          rx={9}
          style={{
            stroke: 'none',
          }}
        />
        <Rect
          width={325}
          height={93}
          x={1}
          y={1}
          rx={8}
          style={{
            fill: 'none',
          }}
        />
      </G>
    </G>
  </Svg>
);
