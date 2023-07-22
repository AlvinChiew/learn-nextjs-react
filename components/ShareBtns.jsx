import ShareLinkBtn from "./ShareLinkBtn";

export default function ShareButtons() {
    console.log('[ShareBtns] rendering...');
    return (
        <div className="flex items-center pb-2">
            <ShareLinkBtn /> | [Twitter] | [Facebook]
        </div>
    )
}