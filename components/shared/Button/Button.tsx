import React, { SyntheticEvent } from 'react';

export interface IButton {
  title: string;
  primary?: boolean;
  secondary?: boolean;
  warn?: boolean;
  type: 'Simple' | 'Pill' | 'Outline' | 'Bordered' | '3D' | 'Elevated';
  icon?: React.FC;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick(event: SyntheticEvent): any;
}

const Button: React.FC<IButton> = ({
  title,
  primary = false,
  secondary = false,
  warn = false,
  type = 'Simple',
  disabled = false,
  icon,
  onClick,
}) => {
  if (primary) {
    switch (type) {
      case 'Simple':
        return (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onClick}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Pill':
        return (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case '3D':
        return (
          <button
            className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Bordered':
        return (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Elevated':
        return (
          <button
            className={`bg-blue-500 hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Outline':
        return (
          <button
            className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      default:
        return (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
    }
  }
  if (secondary) {
    switch (type) {
      case 'Simple':
        return (
          <button
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onClick}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Pill':
        return (
          <button
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case '3D':
        return (
          <button
            className={`bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Bordered':
        return (
          <button
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Elevated':
        return (
          <button
            className={`bg-yellow-500 hover:bg-yellow-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Outline':
        return (
          <button
            className={`bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      default:
        return (
          <button
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
    }
  }
  if (warn) {
    switch (type) {
      case 'Simple':
        return (
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onClick}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Pill':
        return (
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case '3D':
        return (
          <button
            className={`bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Bordered':
        return (
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Elevated':
        return (
          <button
            className={`bg-red-500 hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      case 'Outline':
        return (
          <button
            className={`bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
      default:
        return (
          <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
              disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <>
              {icon ? icon : null}
              <span>{title}</span>
            </>
          </button>
        );
    }
  }
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        disabled ? 'rounded opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
    >
      <>
        {icon ? icon : null}
        <span>{title}</span>
      </>
    </button>
  );
};

export default Button;
