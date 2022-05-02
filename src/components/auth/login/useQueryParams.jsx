/**
 *
 * @param {Array} requiredParameters - an array of the required names to get from the url
 * @returns {Object} - queryParams
 */
export const useQueryParams = (requiredParameters) => {
    const queryParams = new URLSearchParams(window.location.search);

    return requiredParameters.reduce((mappedValues, parameterName) => {
        mappedValues[parameterName] = queryParams.get(parameterName);
        return mappedValues;
    }, {});
};
