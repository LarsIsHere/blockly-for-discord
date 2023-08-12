/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { BlockSvg } from './block_svg.js';
/**
 * Registers that the given block and all of its parents need to be rerendered,
 * and registers a callback to do so after a delay, to allowf or batching.
 *
 * @param block The block to rerender.
 * @internal
 */
export declare function queueRender(block: BlockSvg): void;
//# sourceMappingURL=render_management.d.ts.map