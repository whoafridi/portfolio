"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const externalImagesDownloader = ({ terse = false, manifest, destDir }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!terse) {
        // eslint-disable-next-line no-console
        console.log('\n- Download external images -');
    }
    const promises = [];
    const downloadedImages = [];
    for (const { src, externalUrl } of manifest) {
        if (externalUrl === undefined)
            continue;
        if (downloadedImages.some(image => image === externalUrl))
            continue;
        promises.push((() => __awaiter(void 0, void 0, void 0, function* () {
            downloadedImages.push(externalUrl);
            const outputPath = path_1.default.join(destDir, src);
            if (!fs_1.default.existsSync(outputPath))
                throw new Error(`Path: ${outputPath} doesn't exist`);
            yield new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const readStream = yield fetch(externalUrl).then(r => r.body);
                    const writeStream = fs_1.default.createWriteStream(outputPath);
                    // readStream.pipe(writeStream)
                    writeStream.on('finish', () => {
                        if (!terse) {
                            // eslint-disable-next-line no-console
                            console.log(`\`${externalUrl}\` has been downloaded.`);
                        }
                        resolve(undefined);
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        }))());
    }
    yield Promise.all(promises);
});
// export default externalImagesDownloader