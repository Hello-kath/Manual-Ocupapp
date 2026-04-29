export const useCarbonClasses = () => {
  return {
    // Backgrounds
    bg: 'bg-gray-50 dark:bg-gray-900',
    surface: 'bg-white dark:bg-gray-800',
    surfaceHover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    layer01: 'bg-gray-100 dark:bg-gray-700',
    layer02: 'bg-gray-200 dark:bg-gray-600',
    layer03: 'bg-gray-300 dark:bg-gray-500',

    // Borders
    border: 'border-gray-300 dark:border-gray-600',
    borderSubtle: 'border-gray-200 dark:border-gray-700',
    borderInteractive: 'border-blue-600 dark:border-blue-400',
    borderFocus: 'border-blue-600 dark:border-blue-400 ring-2 ring-blue-600 ring-opacity-20 dark:ring-blue-400 dark:ring-opacity-40',

    // Text
    textPrimary: 'text-gray-900 dark:text-gray-100',
    textSecondary: 'text-gray-700 dark:text-gray-100',
    textPlaceholder: 'text-gray-400 dark:text-gray-500',
    textHelper: 'text-gray-600 dark:text-gray-100',
    textError: 'text-red-600 dark:text-red-400',
    textSuccess: 'text-green-600 dark:text-green-400',
    textWarning: 'text-yellow-600 dark:text-yellow-400',

    // Buttons
    btnPrimary: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white',
    btnSecondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-gray-100',
    btnSuccess: 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white',
    btnGhost: 'text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700',
    btnDanger: 'bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white',

    // Shadows
    shadow01: 'shadow-sm',
    shadow02: 'shadow-md',
    shadow03: 'shadow-lg',

    // States
    disabled: 'opacity-50 cursor-not-allowed',
  };
};
