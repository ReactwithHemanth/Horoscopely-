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
