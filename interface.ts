interface MouseFunction {
        isFree(): boolean;
        click();
        scroll();
        micro();
        changeDPI();
        extraButton();
        openControlDashboardByExtraButton();
}

// 80k
class MitsubishiMouse implements MouseFunction {
        isFree() {
                return true;
        }
        click() {}
        scroll() {}
        micro() {
                throw new Error("????????");
        }
        changeDPI() {
                throw new Error("????????");
        }
        extraButton() {
                throw new Error("????????");
        }
        openControlDashboardByExtraButton() {
                throw new Error("????????");
        }
}

// 350k
class LogitechMouse implements MouseFunction {
        isFree() {
                return true;
        }
        click() {}
        scroll() {}
        openControlDashboardByExtraButton() {}
        changeDPI() {}

        micro() {
                throw new Error("????????");
        }
        extraButton() {
                throw new Error("????????");
        }
}
// 2000k
class RazerMouse implements MouseFunction {
        isFree() {
                return true;
        }
        click() {}
        scroll() {}
        micro() {}
        changeDPI() {}
        extraButton() {}
        openControlDashboardByExtraButton() {}
}

//-----------

function micro() {
        const mitsubishiMouse = new MitsubishiMouse();
        const logitechMouse = new LogitechMouse();
        const razerMouse = new RazerMouse();

        if (mitsubishiMouse.isFree()) {
                //  not support
        } else if (logitechMouse.isFree()) {
                logitechMouse.micro();
        } else if (razerMouse.isFree()) {
                logitechMouse.micro();
        }
}

interface MouseBasicFunction {
        isFree(): boolean;
        click();
        scroll();
}
interface MouseAdvanceFunction {
        micro();
        changeDPI();
}

interface MouseExtraFunction {
        extraButton();
        openControlDashboardByExtraButton();
}
