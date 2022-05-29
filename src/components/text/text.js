import {Text as RNTest,StyleSheet } from 'react-native';
import React from 'react';
import { presets } from './text.preset';

export default function Text({children, preset = "default", style}) {
    const textStyles = StyleSheet.compose(presets[preset], style)
  return (
    <RNTest style = {textStyles}>{children}</RNTest>
  )
}